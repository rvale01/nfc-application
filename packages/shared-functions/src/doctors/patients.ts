import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, query, getDocs, collection, where, arrayUnion, setDoc, getDoc, arrayRemove, updateDoc, addDoc } from "firebase/firestore";
import { createNewUser } from "../auth/newPatient";
import { db } from "../firebase";
import { v4 as uuidv4 } from 'uuid';

export const addPatientByCodeFunc = async(userCode: string, doctorId: string) => {
    // get the patient with the share code
    const q = query(collection(db, "patients"), where("shared_code", "==", userCode));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async(patientDoc) => {
        const patientId = patientDoc.id

        const relationRef = doc(db, "patient_doctor_relation", doctorId);
        await setDoc(relationRef, {
            patients: arrayUnion(patientId)
        }, { merge: true });
    });
}

export const addPatientByIdFunc = async(patientId: string, doctorId: string) => {
    const patientDoc = await getDoc(doc(db, "patients", patientId));
    
    if (patientDoc.exists()) {
        return patientDoc.data()
    } else {
        console.log("No such document!");
    }
    
}

export const getPatientsList = async(doctorId: string) => {
    const patientsRef = doc(db, "patient_doctor_relation", doctorId);
    const patientsId = (await getDoc(patientsRef)).data()?.patients
    
    if(patientsId){
        const q = query(collection(db, "patients"), where("__name__", "in", patientsId));
        
        const querySnapshot = await getDocs(q);
        let patientsList:PatientDetailsI[] = []
        querySnapshot.forEach(async(patientDoc) => {
            patientsList.push(patientDoc.data() as PatientDetailsI)
        });
        return patientsList
    }else {
        return []
    }
}

export const removePatientsFunc = async(usersId: string[], doctorId: string) => {
    try {
        const queryRef = doc(db, "patient_doctor_relation", doctorId);
        
        await setDoc(queryRef, {
            patients: arrayRemove(...usersId)
        }, { merge: true });
    }catch(e){
        throw e
    }
}

export const createNewPatientFunc = async(patientDetails: PatientDetailsI, doctorId: string) => {
    try {
      // Create a new user with email and password
      const userCredential = await createNewUser(patientDetails.email);
      const userId = userCredential.user.uid;

      const shared_code = uuidv4();
      let tempDetails = {
        ...patientDetails, 
        userId: userId,
        shared_code
      }
      // Create a new patient document with the patient's details
      const patientRef = await addDoc(collection(db, "patients"), tempDetails);

        const relationRef = doc(db, "patient_doctor_relation", doctorId);
        await setDoc(relationRef, {
            patients: arrayUnion(userId)
        }, { merge: true });
        
      return patientRef.id;
    } catch (error) {
      throw error;
    }
  }
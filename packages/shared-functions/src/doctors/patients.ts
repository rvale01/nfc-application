import { doc, query, getDocs, collection, where, arrayUnion, setDoc, getDoc, arrayRemove } from "firebase/firestore";
import { db } from "../firestore";

export const addPatientByCodeFunc = async(userCode: string) => {
    // get the patient with the share code
    const q = query(collection(db, "patients"), where("shared_code", "==", userCode));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async(patientDoc) => {
        const doctorId = localStorage.getItem("user_id") ?? ''
        const patientId = patientDoc.id

        const relationRef = doc(db, "patient_doctor_relation", doctorId);
        await setDoc(relationRef, {
            patients: arrayUnion(patientId)
        }, { merge: true });
    });
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

export const removePatientsFunc = async(usersId: string[]) => {
    try {
        const doctorId = localStorage.getItem("user_id") ?? ''
        const queryRef = doc(db, "patient_doctor_relation", doctorId);

        console.log(usersId)
        await setDoc(queryRef, {
            patients: arrayRemove(...usersId)
        }, { merge: true });
    }catch(e){
        console.log(e)
    }
}
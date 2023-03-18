import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getDoc, setDoc, query, where, collection, getDocs, arrayUnion, deleteDoc, arrayRemove} from "firebase/firestore";
import { showNotification } from 'ui-web';
import { db } from '../../../../firebase';

export const getDoctorDetails = createAsyncThunk(
    'details/getDoctorDetails',
    async () => {
        const usersId = localStorage.getItem('user_id') as string
        const docRef = doc(db, "doctors", usersId);
        const data = (await getDoc(docRef));
        return data.data() as DoctorDetailsI
    }
)

const updateDocDetailsFunc = async(data: DoctorDetailsI) => {
    return new Promise(async (resolve, reject) => {
        const usersId = localStorage.getItem('user_id') as string
        await setDoc(
            doc(db, "doctors", usersId),data) 
                .then( () => resolve(""))
                .catch(err=> {
                    reject(err)
                })
    })
}

export const updateDocDetails = createAsyncThunk(
    'doctor/updateDocDetails',
    async (data: DoctorDetailsI) => {
        showNotification(
            {
                func: () =>  updateDocDetailsFunc(data),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: "Details updated!"
                }
            }
        )
        .then((userCredential) => {
            return userCredential.user;
        })
    }
)

const addPatientByCodeFunc = async(userCode: string) => {
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

export const addPatientByCode =  createAsyncThunk(
    'doctor/addPatientByCode',
    async (code: string) => {
        showNotification(
            {
                func: () =>  addPatientByCodeFunc(code),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: {
                        render(){
                            //TODO: redirect to another page
                            return "New patient added!"
                        }
                    }
                }
            }
        )
        .then((userCredential) => {
            return userCredential.user;
        })
    }
)

export const getPatientsList = createAsyncThunk(
    'doctor/getPatientsList',
    async () => {
        const doctorId = localStorage.getItem("user_id") ?? ''
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
)

const removePatientsFunc = async(usersId: string[]) => {
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
export const removePatients = createAsyncThunk(
    'doctor/removePatients',
    async (usersId: string[]) => {
        showNotification(
            {
                func: () =>  removePatientsFunc(usersId),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: "Patients deleted successfully"
                }
            }
        )
    }
)
import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getDoc, setDoc, query, where, collection, getDocs, arrayUnion  } from "firebase/firestore";
import { showNotification } from 'ui-web';
import { db } from '../../../../firebase';

export const getDoctorDetails = createAsyncThunk(
    'details/getDoctorDetails',
    async () => {
        const userId = localStorage.getItem('user_id') as string
        const docRef = doc(db, "doctors", userId);
        const data = (await getDoc(docRef));
        return data.data() as DoctorDetailsI
    }
)

const updateDocDetailsFunc = async(data: DoctorDetailsI) => {
    return new Promise(async (resolve, reject) => {
        const userId = localStorage.getItem('user_id') as string
        await setDoc(
            doc(db, "doctors", userId),data) 
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
    const q = query(collection(db, "patients"), where("shared_code", "==", code));
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
    'doctor/updateDocDetails',
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
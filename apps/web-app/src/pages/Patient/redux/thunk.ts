import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getDoc, setDoc } from "firebase/firestore";
import { showNotification } from 'ui-web';
import { db } from '../../../../firebase';

export const getPatientDetails = createAsyncThunk(
    'details/getPatientDetails',
    async () => {
        const userId = localStorage.getItem('user_id') as string
        const docRef = doc(db, "patients", userId);
        const datas = (await getDoc(docRef));
        return datas.data() as PatientDetailsI
    }
)

const updateDetailsFunc = async(data: PatientDetailsI) => {
    return new Promise(async (resolve, reject) => {
        const userId = localStorage.getItem('user_id') as string
        await setDoc(
            doc(db, "patients", userId),data) 
                .then( () => resolve(""))
                .catch(err=> {
                    reject(err)
                })
    })
}

export const updateDetails = createAsyncThunk(
    'patient/updateDetails',
    async (data: PatientDetailsI) => {
        showNotification(
            {
                func: () =>  updateDetailsFunc(data),
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
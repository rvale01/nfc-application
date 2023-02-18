import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getDoc, setDoc } from "firebase/firestore";
import { showNotification } from 'ui-web';
import { db } from '../../../../firebase';

export const getDoctorDetails = createAsyncThunk(
    'details/getDoctorDetails',
    async () => {
        const userId = localStorage.getItem('user_id') as string
        const docRef = doc(db, "doctors", userId);
        const datas = (await getDoc(docRef));
        return datas.data() as DoctorDetailsI
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
                    pending: 'loading',
                    success: "Welcome!"
                }
            }
        )
        .then((userCredential) => {
            return userCredential.user;
        })
    }
)
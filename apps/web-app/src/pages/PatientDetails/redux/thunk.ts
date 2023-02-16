import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../../firebase';

export const getPatientDetails = createAsyncThunk(
    'details/getPatientDetails',
    async (userId: string) => {
        const docRef = doc(db, "patients", userId);
        const datas = (await getDoc(docRef));
        return datas.data() as PatientDetailsI
    }
)
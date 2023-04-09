import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPatientDetails as getDetailsFunc, updatePatientDetailsFunc } from 'shared-functions';
import { showNotification } from 'ui-web';

export const getPatientDetails = createAsyncThunk(
    'details/getPatientDetails',
    async () => {
        const userId = localStorage.getItem('user_id') as string
        return getDetailsFunc(userId)
    }
)

export const updateDetails = createAsyncThunk(
    'patient/updateDetails',
    async (data: PatientDetailsI) => {
        showNotification(
            {
                func: () =>  updatePatientDetailsFunc(data),
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
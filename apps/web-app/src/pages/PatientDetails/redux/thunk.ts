import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPatientDetails as getPatientDetailsFunc } from "shared-functions"

export const getPatientDetails = createAsyncThunk(
    'details/getPatientDetails',
    async (userId: string) => {
        return getPatientDetailsFunc(userId)
    }
)
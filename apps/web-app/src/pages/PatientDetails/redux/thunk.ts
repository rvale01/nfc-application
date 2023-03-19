import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPatientsDetails } from "shared-functions"

export const getPatientDetails = createAsyncThunk(
    'details/getPatientDetails',
    async (userId: string) => {
        return getPatientsDetails(userId)
    }
)
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getPatientDetails } from './thunk'

export interface InitialStateI {
    patientDetailsRequest: {
        data: PatientDetailsI,
        status: StatusI
    }
}
  
const initialState: InitialStateI = {
    patientDetailsRequest: {} as InitialStateI['patientDetailsRequest']
}
  
export const authSlice = createSlice({
    name: 'patientDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPatientDetails.fulfilled, (state, action)=> {
                state.patientDetailsRequest.status = 'fulfilled'
                state.patientDetailsRequest.data = action.payload
            })
            .addCase(getPatientDetails.pending, (state)=> {
                state.patientDetailsRequest.status = 'pending'
            })
            .addCase(getPatientDetails.rejected, (state, action)=> {
                state.patientDetailsRequest.status = 'rejected'
            })
    }
})
  
  
export default authSlice.reducer
  
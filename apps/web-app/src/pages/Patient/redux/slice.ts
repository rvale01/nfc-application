import { createSlice } from '@reduxjs/toolkit'
import { getPatientDetails, getDoctorsList } from './thunk'

export interface InitialStateI {
    patientDetailsRequest: {
        data: PatientDetailsI,
        status: StatusI
    }
    doctorsListRequest: {
        data: BriefDoctorDetailsI[],
        status: StatusI
    }
}
  
const initialState: InitialStateI = {
    patientDetailsRequest: {} as InitialStateI['patientDetailsRequest'],
    doctorsListRequest: {} as InitialStateI['doctorsListRequest']
}
  
export const patientSlice = createSlice({
    name: 'patient',
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
            });
        
        builder
            .addCase(getDoctorsList.fulfilled, (state, action)=> {
                state.doctorsListRequest.status = 'fulfilled'
                state.doctorsListRequest.data = action.payload
            })
            .addCase(getDoctorsList.pending, (state)=> {
                state.doctorsListRequest.status = 'pending'
            })
            .addCase(getDoctorsList.rejected, (state, action)=> {
                state.doctorsListRequest.status = 'rejected'
            })
    }
})
  
  
export default patientSlice.reducer
  
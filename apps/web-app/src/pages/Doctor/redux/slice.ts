import { createSlice } from '@reduxjs/toolkit'
import { addPatientByCode, getDoctorDetails } from './thunk'

export interface InitialStateI {
    doctorsDetailsRequest: {
        data: DoctorDetailsI,
        status: StatusI
    },
    addPatientByCodeReq: {
        status: StatusI
    },
}

const initialState: InitialStateI = {
    doctorsDetailsRequest: {} as InitialStateI['doctorsDetailsRequest']
}

export const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDoctorDetails.fulfilled, (state, action)=> {
                state.doctorsDetailsRequest.status = 'fulfilled'
                state.doctorsDetailsRequest.data = action.payload
            })
            .addCase(getDoctorDetails.pending, (state)=> {
                state.doctorsDetailsRequest.status = 'pending'
            })
            .addCase(getDoctorDetails.rejected, (state, action)=> {
                state.doctorsDetailsRequest.status = 'rejected'
            })

        builder
            .addCase(addPatientByCode.fulfilled, (state, action)=> {
                state.addPatientByCodeReq.status = 'fulfilled'
            })
            .addCase(addPatientByCode.pending, (state)=> {
                state.doctorsDetailsRequest.status = 'pending'
            })
            .addCase(addPatientByCode.rejected, (state, action)=> {
                state.doctorsDetailsRequest.status = 'rejected'
            })

    }
})
  
  
export default doctorSlice.reducer
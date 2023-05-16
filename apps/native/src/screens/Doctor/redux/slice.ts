import { createSlice } from '@reduxjs/toolkit'
import { getDoctorDetails, getPatientsList } from './thunk'

export interface InitialStateI {
    doctorsDetailsRequest: {
        data: DoctorDetailsI,
        status: StatusI
    },
    getPatientsList: {
        status: StatusI;
        data: PatientDetailsI[]
    },
    selectedPatient: PatientDetailsI,
    user: any
}

const initialState: InitialStateI = {
    doctorsDetailsRequest: {} as InitialStateI['doctorsDetailsRequest'],
    getPatientsList: {} as InitialStateI['getPatientsList'],
    user: {},
    selectedPatient: {} as PatientDetailsI
}

export const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload
        },
        setSelectedPatient(state, action){
            state.selectedPatient = action.payload
        }
    },
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
            .addCase(getPatientsList.fulfilled, (state, action)=> {
                state.getPatientsList.status = 'fulfilled'
                state.getPatientsList.data = action.payload
            })
            .addCase(getPatientsList.pending, (state)=> {
                state.getPatientsList.status = 'pending'
            })
            .addCase(getPatientsList.rejected, (state)=> {
                state.getPatientsList.status = 'rejected'
            })

    }
})
  
export const { setUser, setSelectedPatient } = doctorSlice.actions
export default doctorSlice.reducer
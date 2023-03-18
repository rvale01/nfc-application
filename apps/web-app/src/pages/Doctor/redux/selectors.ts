import { RootState } from "../../store";

export const selectorDoctorsDetailsRequest = (state: RootState) => state.doctor.doctorsDetailsRequest
export const selectorGetPatientsListRequest = (state: RootState) => state.doctor.getPatientsList
export const selectorPatientDetails = (state: RootState) => ( patientId: string) => state.doctor.getPatientsList.data.find((patients)=> patients.id === patientId)
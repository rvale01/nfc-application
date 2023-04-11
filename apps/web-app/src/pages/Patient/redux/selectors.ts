import { RootState } from "../../store";

export const selectorPatientDetailsRequest = (state: RootState) => state.patient.patientDetailsRequest 
export const selectorDoctorsListRequest = (state: RootState) => state.patient.doctorsListRequest
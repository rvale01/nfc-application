import { createAsyncThunk } from '@reduxjs/toolkit'
import { addNewDiseaseFunc, addNewPrescriptionFunc, deleteDiseaseFunc, deletePrescriptionFunc, getDoctorsListFunc, getPatientDetailsFunc, updateDiseaseFunc, updatePatientDetailsFunc, updatePrescriptionFunc } from 'shared-functions';
import { showNotification } from 'ui-web';

export const getPatientDetails = createAsyncThunk(
    'details/getPatientDetails',
    async () => {
        const userId = localStorage.getItem('user_id') as string
        return await getPatientDetailsFunc(userId)
    }
)

export const getDoctorsList = createAsyncThunk(
  'details/getDoctorsList',
  async () => {
      const userId = localStorage.getItem('user_id') as string
      return await getDoctorsListFunc(userId) 
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

export const addNewDisease = createAsyncThunk(
    'patient/addNewDisease',
    async (data: {updatedDisease: DiseasesI, patientId: string}, {dispatch}) => {
        const {patientId, updatedDisease} = data
        showNotification(
            {
                func: () =>  addNewDiseaseFunc(updatedDisease, patientId),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: {
                        render(){
                            dispatch(getPatientDetails())
                            return "Disease added successfully!"
                        }
                    }
                }
            }
        )
    }
)


export const updateDisease = createAsyncThunk(
    'patient/addNewDisease',
    async (data: {updatedDisease: DiseasesI, patientId: string}, {dispatch}) => {
        const {patientId, updatedDisease} = data
        showNotification(
            {
                func: () =>  updateDiseaseFunc(updatedDisease, patientId),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: {
                        render(){
                            dispatch(getPatientDetails())
                            return "Disease added successfully!"
                        }
                    }
                }
            }
        )
    }
)

export const deleteDisease = createAsyncThunk(
    'patient/deleteDisease',
    async (data: {diseasesIds: string[], patientId: string}, {dispatch}) => {
        const {patientId, diseasesIds} = data

        showNotification(
            {
                func: () =>  deleteDiseaseFunc(diseasesIds, patientId),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: {
                        render(){
                            dispatch(getPatientDetails())
                            return "Disease added successfully!"
                        }
                    }
                }
            }
        )
    }
)



export const addNewPrescription = createAsyncThunk(
    "doctor/addNewPrescription",
    async (data: { newPrescription: PrescriptionI; patientId: string }, { dispatch }) => {
      const { patientId, newPrescription } = data;
      showNotification({
        func: () => addNewPrescriptionFunc(newPrescription, patientId),
        messages: {
          error: "Something went wrong! Try again later",
          pending: "Loading",
          success: {
            render() {
              dispatch(getPatientDetails());
              return "Prescription added successfully!";
            },
          },
        },
      });
    }
  );
  
  export const updatePrescription = createAsyncThunk(
    "doctor/updatePrescription",
    async (data: { updatedPrescription: PrescriptionI; patientId: string }, { dispatch }) => {
      const { patientId, updatedPrescription } = data;
      showNotification({
        func: () => updatePrescriptionFunc(updatedPrescription, patientId),
        messages: {
          error: "Something went wrong! Try again later",
          pending: "Loading",
          success: {
            render() {
              dispatch(getPatientDetails());
              return "Prescription updated successfully!";
            },
          },
        },
      });
    }
  );
  
  export const deletePrescription = createAsyncThunk(
    "doctor/deletePrescription",
    async (data: { prescriptionsIds: string[]; patientId: string }, { dispatch }) => {
      const { patientId, prescriptionsIds } = data;
  
      showNotification({
        func: () => deletePrescriptionFunc(prescriptionsIds, patientId),
        messages: {
          error: "Something went wrong! Try again later",
          pending: "Loading",
          success: {
            render() {
              dispatch(getPatientDetails());
              return "Prescription deleted successfully!";
            },
          },
        },
      });
    }
  );
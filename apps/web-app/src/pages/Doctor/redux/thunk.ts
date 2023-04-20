import { createAsyncThunk } from '@reduxjs/toolkit'
import { 
    addPatientByCodeFunc, 
    getDoctorDetails as getDetailsFunc, 
    updateDocDetailsFunc, 
    getPatientsList as getPatientsListFun, 
    removePatientsFunc, 
    updatePatientDetailsFunc, 
    addNewDiseaseFunc, 
    updateDiseaseFunc, 
    deleteDiseaseFunc,
    deletePrescriptionFunc, 
    updatePrescriptionFunc, 
    addNewPrescriptionFunc,
    createNewPatientFunc
} from 'shared-functions';
import { showNotification } from 'ui-web';

export const getDoctorDetails = createAsyncThunk(
    'details/getDoctorDetails',
    async () => {
        const userId = localStorage.getItem('user_id') as string
        return getDetailsFunc(userId)
    }
)

export const updateDocDetails = createAsyncThunk(
    'doctor/updateDocDetails',
    async (data: DoctorDetailsI) => {
        const usersId = localStorage.getItem('user_id') as string
        showNotification(
            {
                func: () =>  updateDocDetailsFunc(data, usersId),
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

export const addPatientByCode =  createAsyncThunk(
    'doctor/addPatientByCode',
    async (code: string) => {
        const doctorId = localStorage.getItem("user_id") ?? ''
        showNotification(
            {
                func: () =>  addPatientByCodeFunc(code, doctorId),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: {
                        render(){
                            //TODO: redirect to another page
                            return "New patient added!"
                        }
                    }
                }
            }
        )
        .then((userCredential) => {
            return userCredential.user;
        })
    }
)

export const getPatientsList = createAsyncThunk(
    'doctor/getPatientsList',
    async () => {
        const doctorId = localStorage.getItem("user_id") ?? ''
        return getPatientsListFun(doctorId)
    }
)

export const removePatients = createAsyncThunk(
    'doctor/removePatients',
    async (usersId: string[], {dispatch}) => {
        const doctorId = localStorage.getItem("user_id") ?? ''
        showNotification(
            {
                func: () =>  removePatientsFunc(usersId, doctorId),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: {
                        render(){
                            dispatch(getPatientsList())
                            return "Patients deleted successfully!"
                        }
                    }
                }
            }
        )
    }
)

export const updatePatientDetails = createAsyncThunk(
    'doctor/updatePatientDetails',
    async (data: PatientDetailsI) => {
        showNotification(
            {
                func: () =>  updatePatientDetailsFunc(data),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: "Patient updated successfully!"
                }
            }
        )
    }
)

export const addNewDisease = createAsyncThunk(
    'doctor/addNewDisease',
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
                            dispatch(getPatientsList())
                            return "Disease added successfully!"
                        }
                    }
                }
            }
        )
    }
)

export const updateDisease = createAsyncThunk(
    'doctor/addNewDisease',
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
                            dispatch(getPatientsList())
                            return "Disease added successfully!"
                        }
                    }
                }
            }
        )
    }
)

export const deleteDisease = createAsyncThunk(
    'doctor/deleteDisease',
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
                            dispatch(getPatientsList())
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
              dispatch(getPatientsList());
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
              dispatch(getPatientsList());
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
              dispatch(getPatientsList());
              return "Prescription deleted successfully!";
            },
          },
        },
      });
    }
  );

  export const addNewPatient = createAsyncThunk(
    "doctor/addNewPatient",
    async (data: PatientDetailsI, { dispatch }) => {
        const doctorId = localStorage.getItem("user_id") ?? ''
      showNotification({
        func: () => createNewPatientFunc(data, doctorId),
        messages: {
          error: "Something went wrong! Try again later",
          pending: "Loading",
          success: "New Patient added!"
        },
      });
    }
  );
  
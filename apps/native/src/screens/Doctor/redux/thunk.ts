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
    createNewPatientFunc,
    addPatientByIdFunc
} from 'shared-functions';
import { Alert } from 'react-native';

export const getDoctorDetails = createAsyncThunk(
    'details/getDoctorDetails',
    async (_, { getState }) => {
        // @ts-ignore
        const userId = getState().doctor.user.uid;
        return getDetailsFunc(userId)
    }
)

export const updateDocDetails = createAsyncThunk(
    'doctor/updateDocDetails',
    async (data: DoctorDetailsI, { getState }) => {
        // @ts-ignore
      const usersId = getState().doctor.user.uid;
      try {
        await updateDocDetailsFunc(data, usersId);
        Alert.alert("Details updated!");
      } catch (error) {
        Alert.alert("Something went Wrong! Try again later");
      }
    }
  );
  

  export const addPatientByCode = createAsyncThunk(
    'doctor/addPatientByCode',
    async (code: string, { getState }) => {
     // @ts-ignore
      const doctorId = getState().doctor.user.uid;
      try {
        await addPatientByCodeFunc(code, doctorId);
        Alert.alert("New patient added!");
      } catch (error) {
        Alert.alert("Something went Wrong! Try again later");
      }
    }
  );

export const getPatientsList = createAsyncThunk(
    'doctor/getPatientsList',
    async (data, {getState}) => {
        // @ts-ignore
        const doctorId = (getState()).doctor.user.uid
        return getPatientsListFun(doctorId)
    }
)

export const removePatients = createAsyncThunk(
    'doctor/removePatients',
    async (usersId: string[], {dispatch, getState}) => {
        // @ts-ignore
        const doctorId = getState().doctor.user.uid;
        try {
            await removePatientsFunc(usersId, doctorId);
            dispatch(getPatientsList());
            Alert.alert("Patients deleted successfully!");
          } catch (error) {
            Alert.alert("Something went Wrong! Try again later");
          }
    }
)

export const updatePatientDetails = createAsyncThunk(
    'doctor/updatePatientDetails',
    async (data: PatientDetailsI) => {
      try {
        await updatePatientDetailsFunc(data);
        Alert.alert("Patient updated successfully!");
      } catch (error) {
        Alert.alert("Something went Wrong! Try again later");
      }
    }
  );
  
  export const addNewDisease = createAsyncThunk(
    'doctor/addNewDisease',
    async (data: {updatedDisease: DiseasesI, patientId: string}, {dispatch}) => {
      const {patientId, updatedDisease} = data;
      try {
        await addNewDiseaseFunc(updatedDisease, patientId);
        dispatch(getPatientsList());
        Alert.alert("Disease added successfully!");
      } catch (error) {
        Alert.alert("Something went Wrong! Try again later");
      }
    }
  );

export const updateDisease = createAsyncThunk(
    'doctor/addNewDisease',
    async (data: {updatedDisease: DiseasesI, patientId: string}, {dispatch}) => {
        const {patientId, updatedDisease} = data
        try {
            await updateDiseaseFunc(updatedDisease, patientId);
            dispatch(getPatientsList());
            Alert.alert("Disease added successfully!");
        }catch (error) {
            Alert.alert("Something went Wrong! Try again later");
        }
    }
)

export const deleteDisease = createAsyncThunk(
    'doctor/deleteDisease',
    async (data: {diseasesIds: string[], patientId: string}, {dispatch}) => {
      const {patientId, diseasesIds} = data;
      try {
        await deleteDiseaseFunc(diseasesIds, patientId);
        dispatch(getPatientsList());
        Alert.alert("Disease deleted successfully!");
      } catch (error) {
        Alert.alert("Something went Wrong! Try again later");
      }
    }
  );


export const addNewPrescription = createAsyncThunk(
    "doctor/addNewPrescription",
    async (data: { newPrescription: PrescriptionI; patientId: string }, { dispatch }) => {
      const { patientId, newPrescription } = data;
      try {
        await addNewPrescriptionFunc(newPrescription, patientId);
        dispatch(getPatientsList());
        Alert.alert("Prescription added successfully!");
      } catch (error) {
        Alert.alert("Something went wrong! Try again later");
      }
    }
  );
  
  export const updatePrescription = createAsyncThunk(
    "doctor/updatePrescription",
    async (data: { updatedPrescription: PrescriptionI; patientId: string }, { dispatch }) => {
      const { patientId, updatedPrescription } = data;
      try {
        await updatePrescriptionFunc(updatedPrescription, patientId);
        dispatch(getPatientsList());
        Alert.alert("Prescription updated successfully!");
      } catch (error) {
        Alert.alert("Something went wrong! Try again later");
      }
    }
  );
  
  export const deletePrescription = createAsyncThunk(
    "doctor/deletePrescription",
    async (data: { prescriptionsIds: string[]; patientId: string }, { dispatch }) => {
      const { patientId, prescriptionsIds } = data;
      try {
        await deletePrescriptionFunc(prescriptionsIds, patientId);
        dispatch(getPatientsList());
        Alert.alert("Prescription deleted successfully!");
      } catch (error) {
        Alert.alert("Something went wrong! Try again later");
      }
    }
  );

  export const addNewPatient = createAsyncThunk(
    "doctor/addNewPatient",
    async ({data}: {data: any}) => {
      // @ts-ignore
      const doctorId = getState().doctor.user.uid;
      try {
        await createNewPatientFunc(data, doctorId);
        Alert.alert("New Patient added!");
      } catch (error) {
        Alert.alert("Something went wrong! Try again later");
      }
    }
  );
  
  export const addPatientById = createAsyncThunk(
    "doctor/addNewPatient",
    async (id: string) => {
      // @ts-ignore
      const doctorId = getState().doctor.user.uid;
      try {
        await addPatientByIdFunc(id, doctorId);
        Alert.alert("New Patient added!");
      } catch (error) {
        Alert.alert("Something went wrong! Try again later");
      }
    }
  );
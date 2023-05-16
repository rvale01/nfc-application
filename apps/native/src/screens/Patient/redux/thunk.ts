import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewDiseaseFunc,
  addNewPrescriptionFunc,
  deleteDiseaseFunc,
  deletePrescriptionFunc,
  getDoctorsListFunc,
  getPatientDetailsFunc,
  updateDiseaseFunc,
  updatePatientDetailsFunc,
  updatePrescriptionFunc,
} from 'shared-functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const getPatientDetails = createAsyncThunk(
  'details/getPatientDetails',
  async () => {
    const userId = (await AsyncStorage.getItem('user_id')) as string;
    return await getPatientDetailsFunc(userId);
  },
);

export const getDoctorsList = createAsyncThunk(
  'details/getDoctorsList',
  async () => {
    const userId = (await AsyncStorage.getItem('user_id')) as string;
    return await getDoctorsListFunc(userId);
  },
);

export const updateDetails = createAsyncThunk(
  'patient/updateDetails',
  async (data: PatientDetailsI) => {
    try {
      await updatePatientDetailsFunc(data);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong! Try again later');
    }
  },
);

export const addNewDisease = createAsyncThunk(
  'patient/addNewDisease',
  async (data: { updatedDisease: DiseasesI; patientId: string }, { dispatch }) => {
    const { patientId, updatedDisease } = data;
    try {
      await addNewDiseaseFunc(updatedDisease, patientId);
      dispatch(getPatientDetails());
    } catch (error) {
      Alert.alert('Error', 'Something went wrong! Try again later');
    }
  },
);

export const updateDisease = createAsyncThunk(
  'patient/updateDisease',
  async (data: { updatedDisease: DiseasesI; patientId: string }, { dispatch }) => {
    const { patientId, updatedDisease } = data;
    try {
      await updateDiseaseFunc(updatedDisease, patientId);
      dispatch(getPatientDetails());
    } catch (error) {
      Alert.alert('Error', 'Something went wrong! Try again later');
    }
  },
);

export const deleteDisease = createAsyncThunk(
  'patient/deleteDisease',
  async (data: { diseasesIds: string[]; patientId: string }, { dispatch }) => {
    const { patientId, diseasesIds } = data;
    try {
      await deleteDiseaseFunc(diseasesIds, patientId);
      dispatch(getPatientDetails());
    } catch (error) {
      Alert.alert('Error', 'Something went wrong! Try again later');
    }
  },
);

export const addNewPrescription = createAsyncThunk(
  'doctor/addNewPrescription',
  async (data: { newPrescription: PrescriptionI; patientId: string }, { dispatch }) => {
    const { patientId, newPrescription } = data;
    try {
      await addNewPrescriptionFunc(newPrescription, patientId);
      dispatch(getPatientDetails());
    } catch (error) {
      Alert.alert('Error', 'Something went wrong! Try again later');
    }
  },
);

export const updatePrescription = createAsyncThunk(
  'doctor/updatePrescription',
 
  async (data: { updatedPrescription: PrescriptionI; patientId: string }, { dispatch }) => {
    const { patientId, updatedPrescription } = data;
    try {
      await updatePrescriptionFunc(updatedPrescription, patientId);
      dispatch(getPatientDetails());
    } catch (error) {
      Alert.alert('Error', 'Something went wrong! Try again later');
      }
  },
);
    
export const deletePrescription = createAsyncThunk(
    'doctor/deletePrescription',
  async (data: { prescriptionsIds: string[]; patientId: string }, { dispatch }) => {

  const { patientId, prescriptionsIds } = data;
    try {
      await deletePrescriptionFunc(prescriptionsIds, patientId);
      dispatch(getPatientDetails());
    } catch (error) {
      Alert.alert('Error', 'Something went wrong! Try again later');
    }
  },
);
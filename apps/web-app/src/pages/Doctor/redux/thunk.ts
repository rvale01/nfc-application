import { createAsyncThunk } from '@reduxjs/toolkit'
import { addPatientByCodeFunc, getDoctorDetails as getDetailsFunc, updateDocDetailsFunc, getPatientsList as getPatientsListFun, removePatientsFunc } from 'shared-functions';
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
        showNotification(
            {
                func: () =>  updateDocDetailsFunc(data),
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
        showNotification(
            {
                func: () =>  addPatientByCodeFunc(code),
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
    async (usersId: string[]) => {
        showNotification(
            {
                func: () =>  removePatientsFunc(usersId),
                messages: {
                    error: "Something went Wrong! Try again later",
                    pending: 'Loading',
                    success: "Patients deleted successfully"
                }
            }
        )
    }
)
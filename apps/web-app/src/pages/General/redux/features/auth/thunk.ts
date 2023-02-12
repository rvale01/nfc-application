import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth, db } from '../../../../../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { showNotification } from 'ui-web';


const redirectAfterAuth = (isPatient: boolean) => {
    if(isPatient){
        window.location.href = "/#/patient"
    }else{
        window.location.href = "/#/doctor"
    }
}
interface loginUserI {
    email: string;
    password: string;
    isPatient: boolean
}

const errors = {
    "auth/invalid-email": "Email or password wrong. Try again.",
    "auth/wrong-password": "Email or password wrong. Try again.",
    "auth/rejected-credential": "Email or password wrong. Try again.",
    "auth/too-many-requests": "Too many errors! Try later",
    'auth/user-not-found': "User not found! Check your details.",
    "auth/user-disabled": "User disabled! Contact us for more info!",
    "auth/user-cancelled": "User cancelled! Contact us for more info!",
    "auth/email-already-in-use": "Email alreay in use! Click on the login page.",
    "default": "Something went wrong. Try again in a few minutes"
}

const loginFunc = async({email, password, isPatient}: loginUserI) => {
    return new Promise(async (resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
        .then( async(res) => 
            isPatient ?
                await getDoc(doc(db, "patients", res.user.uid))
                .then((res2) => {
                    if(res2.data() === undefined){
                        reject("auth/user-not-found")
                    }else{
                        resolve("")
                    }
                })
                .catch((err)=> reject(err))
            : await getDoc(doc(db, "doctors", res.user.uid))
                .then((res2) => {
                    if(res2.data() === undefined){
                        reject("auth/user-not-found")
                    }else{
                        resolve("")
                    }
                })
                .catch((err)=> {
                    reject(err)
                })
        ).catch(err=> {
            reject(err)
        })
    })
}
export const login = createAsyncThunk(
    'auth/login',
    async ({email, password,isPatient}: loginUserI) => {
        showNotification(
            {
                func: () => loginFunc({email, password, isPatient}), 
                messages: {
                    error: {
                        render({data}){
                            // @ts-ignore
                            if (data.code in errors){
                                // @ts-ignore
                                return errors[data.code as keyof typeof errors]
                            }
                            return errors.default
                          }                  
                    },
                    pending: 'loading',
                    success: {
                        render(){
                            redirectAfterAuth(isPatient)
                            return "Welcome!"
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


interface registerI {
    email: string;
    password: string;
    doctorCode?: string;
    name: string;
    surname: string;
}

const registerFunc = async({email, password, doctorCode, name, surname}:registerI) => {
    return new Promise(async (resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then( async(res) => 
            doctorCode ?
                await setDoc(
                    doc(db, "doctors", res.user.uid),
                    {
                        name,
                        surname,
                        doctorCode,
                    }
                )
                .then(() => resolve(""))
                .catch((err)=> reject(err))
            :   
                await setDoc(
                    doc(db, "patients", res.user.uid),
                    {
                        name,
                        surname,
                        doctorCode,
                    }
                )
                .then(() => resolve(""))
                .catch((err)=> {
                    reject(err)
                })
        ).catch(err=> {
            reject(err)
        })
    })
}
export const register = createAsyncThunk(
    'auth/register',
    async (userData: registerI) => {
        showNotification(
            {
                func:() => registerFunc(userData),
                messages: {
                    error: {
                        render({data}){
                            console.log(data)
                             // @ts-ignore
                            if (data.code in errors){
                                // @ts-ignore
                                return errors[data.code as keyof typeof errors]
                            }
                            return errors.default
                          }                  
                    },
                    pending: 'loading',
                    success: {
                        render(){
                            redirectAfterAuth(!!userData.doctorCode)
                            return "Welcome!"
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
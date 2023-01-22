import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth, db } from '../../../../../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { showNotification } from 'ui-web';

interface loginUserI {
    email: string;
    password: string;
}

const errors = {
    "auth/invalid-email": "Email or password wrong. Try again.",
    "auth/wrong-password": "Email or password wrong. Try again.",
    "auth/rejected-credential": "Email or password wrong. Try again.",
    "auth/too-many-requests": "Too many errors! Try later",
    'auth/user-not-found': "User not found! Check your details.",
    "auth/user-disabled": "User disabled! Contact us for more info!",
    "auth/user-cancelled": "User cancelled! Contact us for more info!"
}

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}: loginUserI) => {
        showNotification(
            {
                func: signInWithEmailAndPassword(auth, email, password), 
                messages: {
                    error: {
                        render({data}){
                            // @ts-ignore
                            return errors[data.code]
                          }                  
                    },
                    pending: 'loading',
                    success: 'Welcome!'
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

const loginFunc = async({email, password, doctorCode, name, surname}:registerI) => {
    return new Promise(async (resolve, reject) => {
        await createUserWithEmailAndPassword(auth, email, password)
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
                .catch((err)=> reject(err))
        )
    })
}
export const register = createAsyncThunk(
    'auth/register',
    async (userData: registerI) => {
        showNotification(
            {
                func:loginFunc(userData),
                messages: {
                    error: {
                        render(err){
                            console.log(err)
                            return 'ok'
                          }                  
                    },
                    pending: 'loading',
                    success: 'Welcome!'
                }
            }
        )
        .then((userCredential) => {
            return userCredential.user;
        })
    }
  )
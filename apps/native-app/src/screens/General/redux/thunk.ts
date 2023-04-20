import { createAsyncThunk } from '@reduxjs/toolkit'
import { showNotification } from 'ui-web';
import { authErrors, loginFunc, registerFunc } from 'shared-functions';


export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}: LoginUserI) => {
        showNotification(
            {
                func: () => loginFunc({email, password}), 
                messages: {
                    error: {
                        render({data}){
                            // @ts-ignore
                            if (data.code in authErrors){
                                // @ts-ignore
                                return authErrors[data.code as keyof typeof errors]
                            }
                            return authErrors.default
                          }                  
                    },
                    pending: 'Loading...',
                    success: "Welcome!"
                }
            }
        )
        .then((userCredential) => {
            return userCredential.user;
        })
        
    }
  )


export const register = createAsyncThunk(
    'auth/register',
    async (userData: RegisterI) => {
        showNotification(
            {
                func:() => registerFunc(userData),
                messages: {
                    error: {
                        render({data}){
                             // @ts-ignore
                            if (data.code in authErrors){
                                // @ts-ignore
                                return authErrors[data.code as keyof typeof errors]
                            }
                            return authErrors.default
                          }                  
                    },
                    pending: 'loading',
                    success: "Welcome!"
                }
            }
        )
        .then((userCredential) => {
            return userCredential.user;
        })
    }
  )
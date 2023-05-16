import { createAsyncThunk } from '@reduxjs/toolkit'
import { authErrors, loginFunc, registerFunc } from 'shared-functions';
import { Alert } from 'react-native';


export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}: LoginUserI) => {
        await loginFunc({email, password})
            .then((userCredential: any) => {
                return userCredential.user;
            })
            .catch((data)=>{
                let error = authErrors.default
                if (data.code in authErrors){
                    // @ts-ignore
                    error = authErrors[data.code as keyof typeof errors]
                }
                Alert.alert(
                    'Error',
                    error,
                    [
                      {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                      },
                    ],
                    { cancelable: false }
                  );
            })        
    }
  )


export const register = createAsyncThunk(
    'auth/register',
    async (userData: RegisterI) => {
        await registerFunc(userData)
            .then((userCredential: any) => {
                return userCredential.user;
            })
            .catch((data)=>{
                let error = authErrors.default
                if (data.code in authErrors){
                    // @ts-ignore
                    error = authErrors[data.code as keyof typeof errors]
                }
                Alert.alert(
                    'Error',
                    error,
                    [
                      {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                      },
                    ],
                    { cancelable: false }
                  );
            })  
    }
  )
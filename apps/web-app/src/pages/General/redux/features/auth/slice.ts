import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InitialStateI {
  loginRequest: {
    status: StatusI,
    error: undefined | string
  }
  // user: 
}
  
const initialState: InitialStateI = {
  loginRequest: {} as InitialStateI['loginRequest']
}
  
export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
  })
  
  
export default authSlice.reducer
  
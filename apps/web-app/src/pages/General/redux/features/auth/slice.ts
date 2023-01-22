import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { login } from './thunk'

export interface InitialStateI {
  // user: 
}
  
const initialState: InitialStateI = {

}
  
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // builder
      //   .addCase(login.fulfilled, (state, action) => {
      //     state.loginRequest.status = 'fulfilled'
      //   });
    }
})
  
  
export default authSlice.reducer
  
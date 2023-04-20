import { createSlice, configureStore } from '@reduxjs/toolkit'
import { postNewRegistration } from './thunk/registration'

interface initialStateI {
  postNewRegistration: ThunkResponse
}

const initialState: initialStateI = {
  postNewRegistration: {
    error: null,
    status: 'idle'
  }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(postNewRegistration.pending, (state, action) => {
          state.postNewRegistration.status = 'pending'
        })
        .addCase(postNewRegistration.fulfilled, (state, action) => {
          state.postNewRegistration.status = 'fulfilled'
        })
        .addCase(postNewRegistration.rejected, (state, action) => {
          state.postNewRegistration.status = 'rejected'
        })
    },
  })
  
//export const { incremented, decremented } = authSlice.actions
  
export default authSlice.reducer

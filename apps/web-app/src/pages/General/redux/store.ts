import { configureStore } from '@reduxjs/toolkit'
import patientDetailsReducer from './features/patientDetails/slice'

export const store = configureStore({
    reducer: {
      patientDetails: patientDetailsReducer,
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

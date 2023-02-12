import { configureStore } from '@reduxjs/toolkit'
import patientDetailsReducer from './General/redux/features/patientDetails/slice'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
    reducer: {
      patientDetails: patientDetailsReducer,
      // patient:
      // doctor: 
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

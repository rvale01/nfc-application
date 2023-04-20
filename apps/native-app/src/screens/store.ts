import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

// import patientDetailsReducer from './PatientDetails/redux/slice'
// import patientReducer from './Patient/redux/slice'
// import doctorReducer from './Doctor/redux/slice'

export const store = configureStore({
    reducer: {
      // patientDetails: patientDetailsReducer,
      // patient: patientReducer,
      // doctor: doctorReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

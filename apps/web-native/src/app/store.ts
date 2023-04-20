import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../screens/Auth/slice';

export default configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});

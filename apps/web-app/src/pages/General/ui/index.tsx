import React from "react";
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { Register } from "./Register";
import { PatientDetails } from "./PatientDetails/index";
import { Patient } from "../../Patient/ui";

const router = createHashRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/doctor",
        element: <div>Hello world!</div>,
    },
    {
        path: "/patient",
        element: <Patient/>,
    },
    {
        path: "/patient-details/:patient_id",
        element: <PatientDetails/>,
    },
  ]);

export const General = () => {
    return(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}
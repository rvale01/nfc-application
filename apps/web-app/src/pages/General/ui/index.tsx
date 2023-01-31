import React from "react";
import {
    createHashRouter,
    HashRouter,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { Register } from "./Register";
import { PatientDetails } from "./PatientDetails/index";
import { Patient } from "../../Patient/ui";

export const General = () => {
    return(
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/doctor" element={<div>okay</div>} />
                    <Route path="/patient" element={<Patient/>} />
                    <Route path="/patient-details/:patientId" element={<PatientDetails/>} />
                </Routes>
            </HashRouter>
        </Provider>
    )
}
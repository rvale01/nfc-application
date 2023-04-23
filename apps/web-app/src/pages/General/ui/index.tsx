import React, {useEffect, useState} from "react";
import {
    HashRouter,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Auth/Login";
import { store } from '../../store'
import { Provider } from 'react-redux'
import { Register } from "./Auth/Register";
import { PatientDetails } from "../../PatientDetails/index";
import { Patient } from "../../Patient/ui";
import { SwitchView } from "./Auth/SwitchView";
import { isTokenValid } from "../lib/isTokenValid";
import { onAuthChange } from "../lib/onAuthChange";
import { LoadingSpinner } from "ui-web";
import { Doctor } from "../../Doctor/ui";

interface PropsI {
    element:React.ReactElement;
}

export const General = () => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null)
    useEffect(() => { 
        if(localStorage.getItem("user_id") === null){
            onAuthChange({setIsAuth: setIsAuth})
        }
      }, []);

    const ProtectedRoute = ({ element }: PropsI) => {
        if(isAuth === null){
            return <LoadingSpinner color="primary"/>
        }
        return (isAuth && isTokenValid()) ? (
          <>
            {element}
          </>
        ) : (
          <Navigate to={"/login"} replace />
        );
    };

    const UnprotectedRoute = ({element}: PropsI) => { 
        if(isAuth === null){
            return <LoadingSpinner color="primary"/>
        }
        return (isAuth && isTokenValid()) ? (
            <Navigate to={`/switch-view`} replace />
        ) : (
            <>
                {element}
            </>
        );
    };
        
    return(
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<UnprotectedRoute element={<Login/>}/>} />
                    <Route path="/register" element={<UnprotectedRoute element={<Register />} />}/>

                    <Route path="switch-view" element={<SwitchView />}/>
                    <Route
                        path="/doctor/*"
                        element={<ProtectedRoute element={<Doctor/>} />}
                    />
                    <Route
                        path="/patient/*"
                        element={<ProtectedRoute element={<Patient />} />}
                    />
                    <Route
                        path="/patient-details/:patientId"
                        element={<PatientDetails />}
                    />
                </Routes>
            </HashRouter>
        </Provider>
    )
}
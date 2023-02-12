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

interface PropsI {
    element:React.ReactElement;
}

export const General = () => {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => { 
        onAuthChange({setIsAuth: setIsAuth})
      }, []);

    const ProtectedRoute = ({ element }: PropsI) => {
        
        return (isAuth && isTokenValid()) ? (
          <>
            {element}
          </>
        ) : (
          <Navigate to={"/login"} replace />
        );
    };

    const UnprotectedRoute = ({element}: PropsI) => { 
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
                    <Route path="/" element={<UnprotectedRoute element={<Home/>}/>} />
                    <Route path="/login" element={<UnprotectedRoute element={<Login/>}/>} />
                    <Route path="/register" element={<UnprotectedRoute element={<Register />} />}/>

                    <Route path="switch-view" element={<SwitchView />}/>
                    <Route
                        path="/doctor/*"
                        element={<ProtectedRoute element={<div>okay</div>} />}
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
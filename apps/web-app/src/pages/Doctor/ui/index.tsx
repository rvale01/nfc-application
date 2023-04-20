import React, { useEffect } from "react";
import { DashboardLayout } from "ui-web";
import { Route, Routes, useNavigate } from "react-router-dom";
import { auth } from "shared-functions";
import { useAppDispatch } from "../../store";
import { getDoctorDetails } from "../redux/thunk";
import { Settings } from "./Settings";
import { AddPatient } from "./AddPatient";
import { Patients } from "./Patients";
import { PatientDetails } from "./Patients/PatientDetails";

const menuItems = [
    {
        path: "patients",
        label: "Patients",
        element: <Patients/>
    }, 
    { path: 'add-patient', label: 'Add New Patient', element: <AddPatient/> },
    { path: 'settings', label: 'Setting', element: <Settings/> },
    {
        path: "logout",
        label: "Logout",
    },
]

export const Doctor = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    useEffect(()=> {
        navigate(`/doctor/patients`)
        dispatch(getDoctorDetails())
    }, [])

    const handleChange = (path: string) => {
        if(path === "logout"){
            auth.signOut()
            localStorage.clear()
        }else{
            navigate(`/doctor/${path}`)
        }
    }

    return(
        <DashboardLayout
            activeItem={1}
            menuItems={menuItems}
            onChange={handleChange}
        >
            <Routes>
                {menuItems.map(item => (
                    <Route key={item.path} path={item.path} element={item.element}/>
                ))}
                <Route key={"patient-details"} path={"patient-details/:storage_id"} element={<PatientDetails/>}/>
            </Routes>
        </DashboardLayout>
    )
}
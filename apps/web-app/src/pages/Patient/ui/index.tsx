import React, { useEffect } from "react";
import { DashboardLayout } from "ui-web";
import { Route, Routes, useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";
import { PersonalDetails } from "./PersonalDetails";
import { useAppDispatch } from "../../store";
import { getPatientDetails } from "../redux/thunk";
import { DoctorsDetailsList } from "./DoctorsList";

const menuItems = [
    {
        path: "personal-details",
        label: "Personal Details",
        element: <PersonalDetails />
    }, 
    {
        path: "doctors",
        label: "Doctors",
        element: <DoctorsDetailsList/>
    }, 
    {
        path: "logout",
        label: "Logout"
    },
]

export const Patient = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    useEffect(()=> {
        navigate(`/patient/personal-details`)
        dispatch(getPatientDetails())
    }, [])


    const handleChange = (path: string) => {
        if(path === "logout"){
            auth.signOut()
        }else{
            navigate(`/patient/${path}`)
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
            </Routes>
        </DashboardLayout>
    )
}
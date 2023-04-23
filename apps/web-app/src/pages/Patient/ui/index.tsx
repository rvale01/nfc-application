import React, { useEffect } from "react";
import { DashboardLayout } from "ui-web";
import { Route, Routes, useNavigate } from "react-router-dom";
import { logout } from "shared-functions";
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


    const handleChange = async(path: string) => {
        if(path === "logout"){
            await logout()
            localStorage.clear()
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
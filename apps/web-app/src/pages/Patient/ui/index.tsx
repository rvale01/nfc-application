import React, { useEffect } from "react";
import { DashboardLayout } from "ui-web";
import { Route, Routes } from "react-router-dom";
import { auth } from "../../../../firebase";
import { PersonalDetails } from "./PersonalDetails";

const menuItems = [
    {
        path: "personal-details",
        label: "Personal Details",
        element: <div>OKay</div>//<PersonalDetails />
    }, 
    { path: 'diseases', label: 'Diseases', element: <div>Hello</div> },
    { path: 'prescriptions', label: 'Prescriptions', element: <div>Hello</div> },
    {
        path: "logout",
        label: "Logout"
    },
]

export const Patient = () => {
    const handleChange = (path: string) => {
        if(path === "logout"){
            auth.signOut()
        }else{
            window.location.href = "/#/patient/" + path
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
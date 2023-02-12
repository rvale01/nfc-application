import React, { useEffect } from "react";
import { DashboardLayout } from "ui-web";
import { Route, Routes } from "react-router-dom";
import { auth } from "../../../../firebase";
import { PersonalDetails } from "./PersonalDetails";

const menuItems = [
    {
        path: "/personal-details",
        label: "Personal Details",
        element: <PersonalDetails />
    }, 
    { path: '/diseases', label: 'Diseases', element: <div>Hello</div> },
    { path: '/prescriptions', label: 'Prescriptions', element: <div>Hello</div> },
    {
        path: "/logout",
        label: "Logout",
        element: <div>Hello</div>
    },
]

export const Patient = () => {
    const handleChange = (path: string) => {
        if(path === "logout"){
            auth.signOut()
            .then(()=> {
                window.location.href = '/'
            })
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
                    <Route key={item.path} path={"personal-details"} element={<div>okay yes</div>}/>
                ))}
            </Routes>
        </DashboardLayout>
    )
}
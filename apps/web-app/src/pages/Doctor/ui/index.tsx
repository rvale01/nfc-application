import React, { useEffect } from "react";
import { DashboardLayout } from "ui-web";
import { Route, Routes } from "react-router-dom";
import { auth } from "../../../../firebase";

const menuItems = [
    {
        path: "patients",
        label: "patients",
        element: <div>OKay</div>
    }, 
    { path: 'add-patient', label: 'Add New Patient', element: <div>Hello</div> },
    { path: 'settings', label: 'setting', element: <div>Hello</div> },
    {
        path: "logout",
        label: "Logout",
    },
]

export const Patient = () => {
    const handleChange = (path: string) => {
        if(path === "/logout"){
            auth.signOut()
            .then(()=> {
                window.location.href = '/'
            })
        }else{
            window.location.href = "/#/doctor/" + path
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
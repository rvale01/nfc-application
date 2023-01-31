import React, { useEffect } from "react";
import { DashboardLayout } from "ui-web";
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";
import { auth } from "../../../../firebase";

const routes = [
    {
      path: "/personal-details",
      element: <div/>,
    },
    {
        path: "/diseases",
        element:  <div/>,
    },
    {
        path: "/prescriptions",
        element:  <div/>,
    },
]

const router = createHashRouter(routes);

export const Patient = () => {
    const handleChange = (index: number) => {
        if(index === 3){
            auth.signOut()
            .then(()=> {
                window.location.href = '/'
            })
        }else{
            window.location.href = routes[index].path
        }
    }

    return(
        <DashboardLayout
            activeItem={1}
            menuItems={['Personal Details', 'Diseases', 'Prescriptions', 'Logout']}
            onChange={handleChange}
        >
            <RouterProvider router={router} />
        </DashboardLayout>
    )
}
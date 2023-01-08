import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <div>Hello world!</div>,
    },
    {
        path: "/doctor",
        element: <div>Hello world!</div>,
    },
    {
        path: "/patient",
        element: <div>Hello world!</div>,
    },
  ]);

export const General = () => {
    return(
        <RouterProvider router={router} />
    )
}
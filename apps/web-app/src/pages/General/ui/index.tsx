import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { Register } from "./Register";

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
        element: <Register/>,
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
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}
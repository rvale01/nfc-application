import React from 'react';

import { ToastContainer, toast, ToastPromiseParams } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Notification = () => {
    return(
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            theme="colored"
        />
    )
}

export interface showNotificationI {
    func: () => Promise<any>,
    messages: ToastPromiseParams<any, unknown, unknown>
}

export const showNotification = ({func, messages}: showNotificationI) => {
    return toast.promise(
        func,
        messages
    )
}
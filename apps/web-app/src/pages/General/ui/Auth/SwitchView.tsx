import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../../../../firebase';
import React, { useEffect } from "react";
import { LoadingSpinner } from "ui-web";

export const SwitchView = () => {
    useEffect(()=> {
        const checkUserType = async () => {
            const userId = localStorage.getItem('user_id');
            if (userId) {
              try {
                const userDoc = await getDoc(doc(db, "patients", userId));
                if (userDoc.exists()) {
                  localStorage.setItem('userType', 'patients');
                  window.location.href = '/#/patient';
                } else {
                  const doctorDoc = await getDoc(doc(db, "doctors", userId));
                  if (doctorDoc.exists()) {
                    localStorage.setItem('userType', 'doctors');
                    window.location.href = '/#/doctor';
                  }
                }
              } catch (err) {
                console.error(err);
              }
            }
          };
      
          checkUserType();
    },[])

    return (<LoadingSpinner color="primary"/>)
}
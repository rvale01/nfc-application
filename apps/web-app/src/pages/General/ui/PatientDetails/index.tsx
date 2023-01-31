import React, { useEffect } from 'react'
import { patientDetails } from '../../redux/features/patientDetails/thunk';
import { useParams } from 'react-router-dom';
import { Tabs } from 'ui-web';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { selectorPatientDetailsRequest } from '../../redux/features/patientDetails/selectors';

export const PatientDetails = () => {
    const patientDetailsRequest = useAppSelector(selectorPatientDetailsRequest)

    const dispatch = useAppDispatch()
    let { patientId } = useParams();
    
    console.log(patientDetailsRequest.data, 'patient?')
    
    useEffect(()=> {
        dispatch(patientDetails(patientId!))
    }, [])


    if(patientDetailsRequest.status === 'fulfilled'){
        return (
            <Tabs
                items={[
                    {
                        label: "Personal Details",
                        key: 1,
                        children: <div>ok</div>
                    },
                    {
                        label: "Diseases",
                        key: 2,
                        children: <div>ok</div>
                    },
                    {
                        label: "Prescriptions",
                        key: 3,
                        children: <div>ok</div>
                    }
                ]}
            />
        )     
    }
    return null
}
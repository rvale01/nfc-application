import React, { useEffect } from 'react'
import { getPatientDetails } from './redux/thunk';
import { useParams } from 'react-router-dom';
import { DiseasesTable, LoadingSpinner, PatientPersonalDetailViews, PrescriptionsTable, Tabs } from 'ui-web';
import { useAppDispatch, useAppSelector } from '../store';
import { selectorPatientDetailsRequest } from './redux/selectors';
// @ts-ignore
import { ReactComponent as Logo }  from '../../../../assets/logo.svg'


export const PatientDetails = () => {
    const { data: patientDetails, status} = useAppSelector(selectorPatientDetailsRequest)

    const dispatch = useAppDispatch()
    let { patientId } = useParams();
        
    useEffect(()=> {
        dispatch(getPatientDetails(patientId!))
    }, [])


    if(status === 'fulfilled'){
        return (
            <Tabs
                items={[
                    {
                        label: "Personal Details",
                        key: 1,
                        children: <PatientPersonalDetailViews disabled patient={patientDetails}/>
                    },
                    {
                        label: "Diseases",
                        key: 2,
                        children: <DiseasesTable diseases={patientDetails?.diseases}/>
                    },
                    {
                        label: "Prescriptions",
                        key: 3,
                        children: <PrescriptionsTable prescriptions={patientDetails?.prescriptions}/>
                    }
                ]}
            />
        )     
    }else if(status === "pending"){
        return(<LoadingSpinner color='primary' />)
    }
    return null
}
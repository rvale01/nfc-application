import React, { useEffect } from 'react'
import { getPatientDetails } from '../../redux/features/patientDetails/thunk';
import { useParams } from 'react-router-dom';
import { DiseasesTable, PersonalDetailViews, PrescriptionsTable, Tabs } from 'ui-web';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { selectorPatientDetailsRequest } from '../../redux/features/patientDetails/selectors';
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
                        children: <PersonalDetailViews patient={patientDetails}/>
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
    }
    return null
}
import React, { useEffect } from 'react'
import { patientDetails } from '../../redux/features/patientDetails/thunk';
import { useParams } from 'react-router-dom';
import { Tabs } from 'ui-web';
import { useAppDispatch } from '../../redux/store';

export const PatientDetails = () => {
    const dispatch = useAppDispatch()
    let { patient_id } = useParams();

    useEffect(()=> {
        dispatch(patientDetails(patient_id!))
    }, [])

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
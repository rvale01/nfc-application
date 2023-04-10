// PatientPersonalDetailViews

import React from 'react'
import { PatientPersonalDetailViews } from 'ui-web'
import { useAppDispatch } from '../../../store'
import { addNewPatient } from '../../redux/thunk'

export const NewPatient = () => {
    const dispatch = useAppDispatch()

    return (
        <PatientPersonalDetailViews
            disabled={false}  
            patient={{} as PatientDetailsI}
            onSave={(patient)=> dispatch(addNewPatient(patient))}
        />
    )
}
import React, { useEffect } from "react";
import { DiseasesTable, LoadingSpinner, PatientPersonalDetailViews, PrescriptionsTable, Tabs } from "ui-web";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectorPatientDetailsRequest } from "../redux/selectors";
import { updateDetails } from "../redux/thunk";

export const PersonalDetails = () => {
    const { data: patientDetails, status} = useAppSelector(selectorPatientDetailsRequest)
    const dispatch = useAppDispatch()

    const onChangeDetails = (data: PatientDetailsI) => {
        dispatch(updateDetails(data))
    }

    if(status === 'fulfilled'){
        return (
            <Tabs
                items={[
                    {
                        label: "Personal Details",
                        key: 1,
                        children: <PatientPersonalDetailViews disabled={false} patient={patientDetails} onSave={onChangeDetails}/>
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
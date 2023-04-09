import React from "react";
import { useSelector } from "react-redux";
import { DiseasesTable, PatientPersonalDetailViews, PrescriptionsTable, Tabs } from "ui-web";
import { useParams } from 'react-router-dom';
import { RootState } from "../../../store";
import { selectorPatientDetails } from "../../redux/selectors";
import { addNewDisease, updateDisease } from "shared-functions";

export const PatientDetails = () => {
    const { storage_id } = useParams();
    const patientDetails = useSelector((state: RootState) => selectorPatientDetails(state)(storage_id ?? ''))

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
                        children: <DiseasesTable 
                            diseases={patientDetails?.diseases} 
                            disabled={false} 
                            onNew={(disease)=>addNewDisease(disease, patientDetails?.storage_id!)}
                            onEdit={(disease)=> updateDisease(disease, patientDetails?.storage_id!)}
                        />
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
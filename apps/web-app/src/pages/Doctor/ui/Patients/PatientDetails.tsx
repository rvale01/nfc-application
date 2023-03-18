import React from "react";
import { useSelector } from "react-redux";
import { DiseasesTable, PatientPersonalDetailViews, PrescriptionsTable, Tabs } from "ui-web";
import { RootState } from "../../../store";
import { selectorPatientDetails } from "../../redux/selectors";

export const PatientDetails = () => {
    const patientDetails = useSelector((state: RootState) => selectorPatientDetails(state)('hey'))
    
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
}
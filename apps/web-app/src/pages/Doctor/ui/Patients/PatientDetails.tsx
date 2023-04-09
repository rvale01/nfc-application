import React from "react";
import { useSelector } from "react-redux";
import { DiseasesTable, PatientPersonalDetailViews, PrescriptionsTable, Tabs } from "ui-web";
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from "../../../store";
import { selectorPatientDetails } from "../../redux/selectors";
import { addNewDisease, addNewPrescription, deleteDisease, deletePrescription, updateDisease, updatePatientDetails, updatePrescription } from "../../redux/thunk";

export const PatientDetails = () => {
    const { storage_id } = useParams();
    const patientDetails = useSelector((state: RootState) => selectorPatientDetails(state)(storage_id ?? ''))
    const dispatch = useAppDispatch()
    
    return (
        <Tabs
                items={[
                    {
                        label: "Personal Details",
                        key: 1,
                        children: <PatientPersonalDetailViews disabled={false} patient={patientDetails} onSave={(patient)=> dispatch(updatePatientDetails(patient))}/>
                    },
                    {
                        label: "Diseases",
                        key: 2,
                        children: <DiseasesTable 
                            diseases={patientDetails?.diseases} 
                            disabled={false} 
                            onNew={(disease)=>dispatch(addNewDisease({updatedDisease: disease, patientId: patientDetails?.storage_id!}))}
                            onEdit={(disease)=> dispatch(updateDisease({updatedDisease: disease, patientId: patientDetails?.storage_id!}))}
                            onDelete={(diseasesIds)=> dispatch(deleteDisease({diseasesIds, patientId: patientDetails?.storage_id!}))}
                        />
                    },
                    {
                        label: "Prescriptions",
                        key: 3,
                        children: <PrescriptionsTable 
                            prescriptions={patientDetails?.prescriptions}
                            disabled={false}
                            onNew={(prescription)=>dispatch(addNewPrescription({newPrescription: prescription, patientId: patientDetails?.storage_id!}))}
                            onEdit={(prescription)=> dispatch(updatePrescription({updatedPrescription: prescription, patientId: patientDetails?.storage_id!}))}
                            onDelete={(prescriptionsIds)=> dispatch(deletePrescription({prescriptionsIds, patientId: patientDetails?.storage_id!}))}
                        />
                    }
                ]}
            />
    )
}
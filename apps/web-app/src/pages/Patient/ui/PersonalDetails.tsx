import React, { useEffect } from "react";
import { Box, DiseasesTable, LoadingSpinner, PatientPersonalDetailViews, PrescriptionsTable, Tabs, Text } from "ui-web";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectorPatientDetailsRequest } from "../redux/selectors";
import { addNewDisease, addNewPrescription, deleteDisease, deletePrescription, updateDetails, updateDisease, updatePrescription } from "../redux/thunk";

export const PersonalDetails = () => {
    const { data: patientDetails, status} = useAppSelector(selectorPatientDetailsRequest)
    const dispatch = useAppDispatch()

    if(status === 'fulfilled'){
        return (
            <Box gap="medium" direction="column">
                <Text
                    text="My Details"
                    fontWeight="bold"
                    size="large"
                    color="black"
                /> 
                <Text
                    text={`Share code: ${patientDetails.shared_code}` }
                    size="medium"
                    color="black"
                />

                <Tabs
                    items={[
                        {
                            label: "Personal Details",
                            key: 1,
                            children: <PatientPersonalDetailViews disabled={false} patient={patientDetails} onSave={(patient)=>dispatch(updateDetails(patient))}/>
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
            </Box>
        )     
    }else if(status === "pending"){
        return(<LoadingSpinner color='primary' />)
    }
    return null
}
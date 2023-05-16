import React from "react";
import { ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../store";
import { selectorPatientDetails } from "../../redux/selectors";
import { Container, PatientPersonalDetailViews, PrescriptionDetails, Text, DiseasesList, Button } from "ui-native";
import { addNewDisease, addNewPrescription, deleteDisease, deletePrescription, updateDisease, updatePatientDetails, updatePrescription } from "../../redux/thunk";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export const PatientDetails = ({navigation}: {navigation:NativeStackNavigationProp<ParamListBase>}) => {

    const patientDetails = useSelector(selectorPatientDetails)
    const dispatch = useAppDispatch() 

    return(
        <Container padding={30}>
            <ScrollView>
                <Text text={patientDetails.name + "" + patientDetails.surname } size="title" align="center"/>
                <Button label="Code bracelet" onPress={navigation.navigate}/>
                <PatientPersonalDetailViews
                    disabled={false}
                    onSave={(patient)=> dispatch(updatePatientDetails(patient))}
                    patient={patientDetails}
                />

                <DiseasesList
                    disabled={false}
                    onDelete={(diseases)=> dispatch(deleteDisease({patientId: patientDetails.storage_id, diseasesIds: diseases}))}
                    onEdit={(disease)=> dispatch(updateDisease({patientId: patientDetails.storage_id, updatedDisease: disease}))}
                    onNew={(disease)=> dispatch(addNewDisease({patientId: patientDetails.storage_id, updatedDisease: disease}))}
                    diseases={patientDetails.diseases}
                />

                <PrescriptionDetails
                    disabled={false}
                    onDelete={(prescriptions)=> dispatch(deletePrescription({patientId: patientDetails.storage_id, prescriptionsIds: prescriptions}))}
                    onEdit={(prescription)=> dispatch(updatePrescription({patientId: patientDetails.storage_id, updatedPrescription: prescription}))}
                    onNew={(prescription)=> dispatch(addNewPrescription({patientId: patientDetails.storage_id, newPrescription: prescription}))}
                    prescriptions={patientDetails.prescriptions}
                />
            </ScrollView>
        </Container>
    )
}
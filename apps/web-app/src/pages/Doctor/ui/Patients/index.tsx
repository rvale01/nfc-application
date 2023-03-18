import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, LoadingSpinner, Text, Table } from "ui-web";
import { useAppDispatch } from "../../../store";
import { selectorGetPatientsListRequest } from "../../redux/selectors";
import { getPatientsList, removePatients } from "../../redux/thunk";

export const Patients = () => {
    const getPatientsListRequest = useSelector(selectorGetPatientsListRequest)
    const dispatch = useAppDispatch()
    const tableRef = useRef()
    const navigate = useNavigate()

    useEffect(()=> {
        // get all patients 
        dispatch(getPatientsList())
    }, [])

    const handleDeletePatients = () => {
        const selectedPatients = tableRef?.current.getSelectedRowKeys() as PatientDetailsI[]
        dispatch(removePatients(selectedPatients))
    }

    return (
        <Box direction="column">
            <Text text="Patients List"></Text>

            <Box direction="row" gap="small">
                <Button onClick={handleDeletePatients} label="Remove as a patient" type="secondary"/>
                <Button onClick={()=> navigate("/doctor/add-patient")} label="Add a patient" type="primary"/>
            </Box>

            {
                getPatientsListRequest.status === "pending" 
                ?
                    <LoadingSpinner color="primary"/>
                : null
            }

            {
                getPatientsListRequest.status === "fulfilled" 
                ?
                    <Table
                        ref={tableRef}
                        showCheckboxes
                        // TODO: normalise this
                        dataSource={getPatientsListRequest.data.map((details)=> {return{...details, key: details.storage_id}})}
                        columns={[
                            {
                                title: 'Name',
                                dataIndex: '',
                                render: (data) => (
                                    `${data.name} ${data.surname}`
                                  ),
                            },
                            {
                                title: 'email',
                                dataIndex: 'email',
                            },
                            {
                                title: 'NHS Number',
                                dataIndex: 'nhs_number'
                            },
                            {
                                title: '',
                                dataIndex: '',
                                render: (data) => (
                                    <Button label="Details" onClick={()=> navigate(`/doctor/patient-details/${data.id}`)} type='link'/>
                                  ),
                            }
                        ]}
                    />
                : null
            }
        </Box>
    )
}
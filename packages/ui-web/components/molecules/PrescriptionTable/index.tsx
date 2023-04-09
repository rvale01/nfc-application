import { EditOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import { Box } from "../../atoms/Box";
import { Button } from "../../atoms/Button";
import { Table } from "../../atoms/Table";
import { EditModal } from "./EditModal";
import { NewModal } from "./NewModal";

export interface PrescriptionsTableI{
    prescriptions?: PrescriptionI[]
    disabled?: boolean;
    onEdit?: (prescription: PrescriptionI) => void
    onNew?: (prescription: PrescriptionI) => void
    onDelete?: (prescription: string[]) => void
}
export const PrescriptionsTable = ({prescriptions, disabled=true, onEdit, onNew, onDelete}:PrescriptionsTableI) => {
    const tableRef = useRef()
    const [showNewModal, setShowNewModal] = useState(false)
    const [selectedPrescription, setSelectedPrescription] = useState<null | PrescriptionI>(null)

    return (
        <Box direction="column" gap="small">
            <Table
                ref={tableRef}
                dataSource={prescriptions?.map((el)=> {return({...el, key: el.id})})}
                showCheckboxes={!disabled}  
                columns={[
                    {
                        title: 'Name',
                        dataIndex: 'name',
                    },
                    {
                        title: 'Notes',
                        dataIndex: 'notes',
                    },
                    {
                        title: 'Start',
                        dataIndex: 'start',
                    },
                    {
                        title: 'End',
                        dataIndex: 'end',
                    },
                    {
                        title: '',
                        dataIndex: '',
                        render: (data) => (
                            !disabled ? <EditOutlined onClick={()=> setSelectedPrescription(data)}/> : null
                        )
                    }
                ]}
            />

            <NewModal
                onCancel={()=> setShowNewModal(false)}
                onConfirm={(prescription)=> {
                    onNew && onNew(prescription)
                    setShowNewModal(false)
                }}
                showModal={showNewModal}
            />

            <EditModal
                onCancel={()=> setSelectedPrescription(null)}
                onConfirm={(prescription)=> {
                    onEdit && onEdit(prescription)
                    setSelectedPrescription(null)
                }}
                showModal={selectedPrescription !== null}
                prescription={selectedPrescription || {} as PrescriptionI}
            />
            
            <Box direction="row" gap="small">
                <Button label="Delete prescription" type="danger" onClick={()=> {
                    const selectedPrescriptionsIds = tableRef?.current.getSelectedRowKeys()
                    console.log(selectedPrescriptionsIds)
                    onDelete && onDelete(selectedPrescriptionsIds)
                }}/>
                <Button label="Add new" type="primary" 
                    onClick={()=> setShowNewModal(true)}
                />
            </Box>
        </Box>
    )
}
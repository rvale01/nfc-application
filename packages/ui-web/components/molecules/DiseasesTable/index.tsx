import React, { useRef, useState } from "react";
import { Table } from "../../atoms/Table";
import { EditOutlined } from '@ant-design/icons'
import { Box } from "../../atoms/Box";
import { Button } from "../../atoms/Button";
import { NewModal } from "./NewModal";
import { EditModal } from "./EditModal";
export interface DiseasesTableI{
    diseases?: DiseasesI[];
    disabled?: boolean;
    onEdit?: (disease: DiseasesI) => void
    onNew?: (disease: DiseasesI) => void
}

export const DiseasesTable = ({diseases, disabled=true, onEdit, onNew}:DiseasesTableI) => {
    const tableRef = useRef()
    const [showNewModal, setShowNewModal] = useState(false)
    const [selectedDisease, setSelectedDisease] = useState<null | DiseasesI>(null)

    return (
        <Box direction="column" gap="small">
            <Table
                dataSource={diseases?.map((el, i)=> {return({...el, key: i})})}
                showCheckboxes={!disabled}  
                ref={tableRef}
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
                        title: '',
                        dataIndex: '',
                        render: (data) => (
                            !disabled ? <EditOutlined onClick={()=> setSelectedDisease(data)}/> : null
                        )
                    }
                ]}
            />

            <NewModal
                onCancel={()=> setShowNewModal(false)}
                onConfirm={onNew!}
                showModal={showNewModal}
            />

            <EditModal
                onCancel={()=> setSelectedDisease(null)}
                onConfirm={onNew!}
                showModal={selectedDisease !== null}
                disease={selectedDisease || {} as DiseasesI}
            />
            
            <Box direction="row" gap="small">
                <Button label="Delete diseases" type="danger" onClick={()=> setShowNewModal(true)}/>
                <Button label="Add new" type="primary" 
                    onClick={()=> setShowNewModal(true)}
                />
            </Box>
        </Box>
    )
}
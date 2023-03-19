import React, { useRef } from "react";
import { Table } from "../../atoms/Table";
import { EditOutlined } from '@ant-design/icons'
export interface DiseasesTableI{
    diseases?: DiseasesI[];
    allowEdits?: boolean;
    onEdit?: (id: string) => void
}

export const DiseasesTable = ({diseases, allowEdits=false, onEdit}:DiseasesTableI) => {
    const tableRef = useRef()

    return (
        <Table
            dataSource={diseases?.map((el, i)=> {return({...el, key: i})})}
            showCheckboxes={allowEdits}  
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
                        allowEdits ? <EditOutlined onClick={()=> console.log("okok")}/> : null
                    )
                }
            ]}
        />
    )
}
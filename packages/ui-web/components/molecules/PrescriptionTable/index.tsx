import React from "react";
import { Table } from "../../atoms/Table";

export interface PrescriptionsTableI{
    prescriptions?: PrescriptionI[]
}
export const PrescriptionsTable = ({prescriptions}:PrescriptionsTableI) => {

    return (
        <Table
            dataSource={prescriptions?.map((el)=> {return({...el, key: el.name})})}
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
            ]}
        />
    )
}
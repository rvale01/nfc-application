import React from "react";
import { Table } from "../../atoms/Table";

export interface DiseasesTableI{
    diseases?: DiseasesI[]
}
export const DiseasesTable = ({diseases}:DiseasesTableI) => {

    return (
        <Table
            dataSource={diseases?.map((el)=> {return({...el, key: el.id})})}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                },
                {
                    title: 'Notes',
                    dataIndex: 'notes',
                },
            ]}
        />
    )
}
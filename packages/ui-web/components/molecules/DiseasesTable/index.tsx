import React from "react";
import { Table } from "../../atoms/Table";

export interface DiseasesTableI{
    diseases?: DiseasesI[]
}
export const DiseasesTable = ({diseases}:DiseasesTableI) => {

    return (
        <Table
            dataSource={diseases?.map((el, i)=> {return({...el, key: i})})}
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
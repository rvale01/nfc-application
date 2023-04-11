import React from "react";
import { Table } from "../../atoms/Table";

export interface DoctorsListI{
    doctorsDetails?: BriefDoctorDetailsI[]
}
export const DoctorsList = ({doctorsDetails}:DoctorsListI) => {
    return (
        <Table
            showCheckboxes
            dataSource={doctorsDetails?.map((el)=> {return({...el, key: el.email})})}
            columns={[
                {
                    title: 'Full Name',
                    dataIndex: '',
                    render: (data) => (
                        `${data.name} ${data.surname}`
                      ),
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                },
                {
                    title: 'Mobile',
                    dataIndex: 'mobile',
                },
            ]}
        />
    )
}
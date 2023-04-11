import React from "react";
import { Table } from "../../atoms/Table";

export interface DoctorsListI{
    doctorsDetails?: any[]
    //BriefDoctorDetailsI[]
}
export const DoctorsList = ({doctorsDetails}:DoctorsListI) => {
    return (
        <Table
            showCheckboxes
            dataSource={doctorsDetails?.map((el)=> {return({...el, key: el.email})})}
            columns={[
                {
                    title: 'Full Name',
                    dataIndex: 'full_name',
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
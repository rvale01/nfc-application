import React, { useState } from "react";
import { Button, Container, Grid, Input, Select } from "ui-web";

interface DoctorPersonalDetailViewsI {
    doctor: DoctorDetailsI;
    onSave: (patient: DoctorDetailsI) => void
}

export const DoctorPersonalDetailViews = ({doctor, onSave}: DoctorPersonalDetailViewsI) => {
    const [data, setData] = useState<DoctorDetailsI>(doctor);

    const handleInputBlur = ({value, name}: {value: string, name: string}) => {
        setData((prevData) => ({ ...prevData, [name]: value }));
      };
    return (
        <Container padding="medium">
            <Grid columns={4}>
                <Input name="name" placeholder="Name" type="text" defaultValue={data.name} onBlur={handleInputBlur}/>
                <Input name="surname" placeholder="Surname" type="text" defaultValue={data.surname} onBlur={handleInputBlur}/>
                <Input name="doctor_number" placeholder="Doctor Number" type="text" defaultValue={data.doctor_number} onBlur={handleInputBlur}/>
                <Input name="id" placeholder="Id" type="text" defaultValue={data.id} onBlur={handleInputBlur}/>
                <Input name="email" placeholder="Email" type="email" defaultValue={data.email} onBlur={handleInputBlur}/>
                <Input name="mobile" placeholder="Mobile" type="text" defaultValue={data.mobile} onBlur={handleInputBlur}/>
                <Input name="address" placeholder="Address" type="text" defaultValue={data.address} onBlur={handleInputBlur}/>
                <Input name="address_2" placeholder="Address 2" type="text" defaultValue={data.address_2} onBlur={handleInputBlur}/>
                <Input name="postcode" placeholder="Post Code" type="text" defaultValue={data.postcode} onBlur={handleInputBlur}/>            
                <Button label="Save" onClick={() => onSave(data)} /> 
            </Grid>
        </Container>
    )
}
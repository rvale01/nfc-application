import React from "react";
import { Button, Container, Grid, Input, Select } from "ui-web";

interface DoctorPersonalDetailViewsI {
    doctor?: DoctorDetailsI
}

export const DoctorPersonalDetailViews = ({doctor}: DoctorPersonalDetailViewsI) => {
    return (
        <Container padding="medium">
            <Grid columns={4}>
                <Input placeholder="Name" type="text" defaultValue={doctor?.name}/>
                <Input placeholder="Surname" type="text" defaultValue={doctor?.surname}/>
                <Input placeholder="Doctor Number" type="text" defaultValue={doctor?.doctor_number}/>
                <Input placeholder="Id" type="text" defaultValue={doctor?.id}/>
                <Input placeholder="Email" type="email" defaultValue={doctor?.email}/>
                <Input placeholder="Mobile" type="text" defaultValue={doctor?.mobile}/>
                <Input placeholder="Address" type="text" defaultValue={doctor?.address}/>
                <Input placeholder="Address 2" type="text" defaultValue={doctor?.address_2}/>
                <Input placeholder="Post Code" type="text" defaultValue={doctor?.postcode}/>
                <Button label="Save" onClick={()=> console.log("Saved")}/> 
            </Grid>
        </Container>
    )
}
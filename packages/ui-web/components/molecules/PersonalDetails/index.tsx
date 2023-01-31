import React from "react";
import { Button, Container, Grid, Input, Select } from "ui-web";

interface PersonalDetailsViewI {
    patient?: PatientDetailsI;
    disabled?: boolean
}

export const PersonalDetailViews = ({patient, disabled}: PersonalDetailsViewI) => {
    return (
        <Container padding="medium">
            <Grid columns={4}>
            <Input placeholder="Name" type="text" disabled={disabled} defaultValue={patient?.name}/>
            <Input placeholder="Surname" type="text" disabled={disabled} defaultValue={patient?.surname}/>
            <Input placeholder="Address" type="text" disabled={disabled} defaultValue={patient?.address}/>
            <Input placeholder="Address 2" type="text" disabled={disabled} defaultValue={patient?.address_2}/>
            <Input placeholder="Date of birth" type="date" defaultValue={patient?.dob}/>
            <Input placeholder="Email" type="email" defaultValue={patient?.email}/>
            <Input placeholder="Ethnicity" type="text" disabled={disabled} defaultValue={patient?.ethnicity}/>
            <Input placeholder="Home Phone" type="text" disabled={disabled} defaultValue={patient?.home_phone}/>
            <Input placeholder="Id" type="text" disabled={disabled} defaultValue={patient?.id}/>
            <Input placeholder="Mobile" type="text" disabled={disabled} defaultValue={patient?.mobile}/>
            <Input placeholder="NHS Number" type="text" disabled={disabled} defaultValue={patient?.nhs_number}/>
            <Select 
                onChange={()=> null}
                options={[
                    {label: "F", key: "f"},
                    {label: "M", key: "f"},
                    {label: "Other", key: "other"}
                ]}
            />
            
            {disabled ? <Button label="Save" onClick={()=> console.log("Saved")}/> : null}
            </Grid>
        </Container>
    )
}
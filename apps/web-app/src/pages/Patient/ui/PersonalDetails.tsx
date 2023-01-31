import React from "react";
import { Button, Container, Input, Select } from "ui-web";

export const PersonalDetails = () => {
    console.log("Personal details")
    return (
        <Container>
            <Input placeholder="Name" type="text" />
            <Input placeholder="Surname" type="text" />
            <Input placeholder="Address" type="text" />
            <Input placeholder="Address 2" type="text" />
            <Input placeholder="Date of birth" type="date" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Ethnicity" type="text" />
            <Input placeholder="Home Phone" type="text" />
            <Input placeholder="Id" type="text" />
            <Input placeholder="Mobile" type="text" />
            <Input placeholder="NHS Number" type="text" />
            <Select 
                onChange={()=> null}
                options={[
                    {label: "F", key: "f"},
                    {label: "M", key: "f"},
                    {label: "Other", key: "other"}
                ]}
            />
            
            <Button label="Save" onClick={()=> console.log("Saved")}/>
        </Container>
    )
}
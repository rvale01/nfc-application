import React from "react";
import { Button, Container, Input, Select } from "ui-web";

export const PersonalDetails = (disabled: boolean) => {
    
    return (
        <Container>
            <Input placeholder="Name" type="text" disabled={disabled}/>
            <Input placeholder="Surname" type="text" disabled={disabled}/>
            <Input placeholder="Address" type="text" disabled={disabled}/>
            <Input placeholder="Address 2" type="text" disabled={disabled}/>
            <Input placeholder="Date of birth" type="date" disabled={disabled}/>
            <Input placeholder="Email" type="email" disabled={disabled}/>
            <Input placeholder="Ethnicity" type="text" disabled={disabled}/>
            <Input placeholder="Home Phone" type="text" disabled={disabled}/>
            <Input placeholder="Id" type="text" disabled={disabled}/>
            <Input placeholder="Mobile" type="text" disabled={disabled}/>
            <Input placeholder="NHS Number" type="text" disabled={disabled}/>
            <Select 
                onChange={()=> null}
                options={[
                    {label: "F", key: "f"},
                    {label: "M", key: "m"},
                    {label: "Other", key: "other"}
                ]}
            />
            
            <Button label="Save" onClick={()=> console.log("Saved")}/>
        </Container>
    )
}
import React from "react";
import { Box, Button } from "ui-web";
import { AddPatientPagesI } from ".";

interface SwitchButtonsI {
    onChange: (page: AddPatientPagesI) => void
}
export const SwitchButtons = ({ onChange }: SwitchButtonsI) => {
    return (
        <Box direction="column" gap="medium">
            <Button label="Create Patient" onClick={()=> onChange("createPatient")}/>
            <Button label="Use Patient's Share Code" onClick={()=> onChange("byCode")}/>
        </Box>
    )
}
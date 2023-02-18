import React from "react";
import { Box, Button, Text } from "ui-web";

export const Patients = () => {

    return (
        <Box direction="column">
            <Text text="Patients List"></Text>

            <Box direction="row" gap="small">
                <Button onClick={()=> console.log("Okok")} label="Delete" type="secondary"/>
                <Button onClick={()=> console.log("Okok")} label="Add a patient" type="primary"/>
            </Box>
        </Box>
    )
}
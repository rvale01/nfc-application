import React from "react";
import { Box, Button, Input } from "ui-web";

export const UseCode = () => {
    return (
        <Box direction="row" gap="small">
            <Input placeholder="Shared Code"/>
            <Button label="Add" onClick={()=> console.log("Clicked")}/>
        </Box>
    )
}
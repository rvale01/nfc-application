import React, { useRef } from "react";
import { Box, Button, Input } from "ui-web";
import { useAppDispatch } from "../../../store";
import { addPatientByCode } from "../../redux/thunk";

export const UseCode = () => {
    const dispatch = useAppDispatch()
    const codeRef = useRef(null)
    return (
        <Box direction="row" gap="small" verticalAlign="center">
            <Input placeholder="Shared Code" ref={codeRef}/>
            {/* @ts-ignore */}
            <Button label="Add" onClick={()=> dispatch(addPatientByCode(codeRef.current.value))}/>
        </Box>
    )
}
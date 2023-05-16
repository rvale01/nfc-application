import React, { useState } from "react";
import { Box, Button, Container, Input } from "ui-native"
import { useAppDispatch } from "../../../../store";
import { addPatientByCode } from "../../redux/thunk";

export const UseCode = () => {
    const dispatch = useAppDispatch()
    const [code, setCode] = useState<string>("")

    return (
        <Container padding={30}>
            <Box direction="column" gap="small" verticalAlign="center">
                <Input name="code" label="Shared Code" value={code} onChangeText={setCode}/>
                <Button label="Add" onPress={()=> dispatch(addPatientByCode(code))}/>
            </Box>
        </Container>
    )
}
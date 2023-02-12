import React, { useRef, useState} from "react";
import { Box, Button, Container, Text, Input, Toggle } from "ui-web";
// @ts-ignore
import { ReactComponent as WomanTick }  from '../../../assets/womanTick.svg'
import { login } from "../redux/features/auth/thunk";
import { useAppDispatch } from "../redux/store";

export const Login = () => {    
    const dispatch = useAppDispatch()
    const [isPatient, setIsPatient] = useState(false)
    const userRef = useRef()
    const passRef = useRef()

    return (
        <Box direction="row" verticalAlign="center" horizontalAlign="space-evenly" height="100%">
            <Container padding="xLarge" showShadow borderRadius="standard">
                <Box direction="column" gap="large">
                    <Box direction="row" verticalAlign="center" horizontalAlign="space-between">
                        <Text text="Login" color="black" fontWeight="bold"/>
                        <Toggle defaultChecked={false} checkedText="Patient" unCheckedText="Doctor" onChange={(isChecked)=> setIsPatient(isChecked)} />
                    </Box>
                    <Input ref={userRef} placeholder="email@email.com" type="email"/>
                    <Input ref={passRef} placeholder="********" type="password"/>
                    <Box direction="column" gap="small">
                        <Button type="primary" 
                            // @ts-ignore 
                            onClick={()=>dispatch(login({email:userRef.current.value, password: passRef.current.value, isPatient }))} 
                            label="Login"
                        />
                        <Button type="link" onClick={()=> window.location.href="/#/register"} label="Don’t have an account? Register here"/>
                    </Box>
                </Box>
            </Container>

            <WomanTick style={{maxWidth: "400px"}}/>
        </Box>
    )
}
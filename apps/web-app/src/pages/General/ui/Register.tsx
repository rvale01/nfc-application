import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Container, Text, Input, Toggle } from "ui-web";
// @ts-ignore
import { ReactComponent as WomanTick }  from '../../../assets/womanTick.svg'
import { register } from "../redux/features/auth/thunk";

export const Register = () => {  
    const dispatch = useDispatch()
    const [isPatient, setIsPatient] = useState(false)
    const userRef = useRef()
    const passRef = useRef()
    const nameRef = useRef()
    const doctorCodeRef = useRef()
    const surnameRef = useRef()

    return (
        <Box direction="row" verticalAlign="center" height="100%" horizontalAlign="space-evenly">
            <Container padding="xLarge" showShadow borderRadius="standard">
                <Box direction="column" gap="large">
                    <Box direction="row" verticalAlign="center" horizontalAlign="space-between">
                        <Text text="Register" color="black" fontWeight="bold"/>
                        <Toggle defaultChecked={false} checkedText="Patient" unCheckedText="Doctor" onChange={(isChecked)=> setIsPatient(isChecked)} />
                    </Box>
                    <Input ref={userRef} placeholder="email@email.com" type="email"/>
                    <Input ref={passRef} placeholder="********" type="password"/>
                    <Input ref={nameRef} placeholder="Name" type="text"/>
                    <Input ref={surnameRef} placeholder="Surname" type="text"/>
                    {
                        !isPatient && <Input ref={doctorCodeRef} placeholder="Doctor Number" type="text"/>
                    }
                    <Box direction="column" verticalAlign="center" gap="small">
                        <Button type="primary" label="Register" 
                        onClick={()=> dispatch(
                            register({
                                email: userRef.current!.value, 
                                name: nameRef.current!.value, 
                                password: passRef.current!.value,
                                surname: surnameRef.current!.value,
                                doctorCode: isPatient ? null : doctorCodeRef!.current.value
                            }))}
                        />
                        <Button type="link" onClick={()=> window.location.href="/register"} label="Don’t have an account? Register here"/>
                    </Box>
                </Box>
            </Container>

            <WomanTick/>
        </Box>
    )
}
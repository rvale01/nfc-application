import React, { useRef, useState } from "react";
import { Box, Button, Container, Text, Input, Toggle } from "ui-web";
// @ts-ignore
import { ReactComponent as WomanTick }  from '../../../../assets/womanTick.svg'
import { register } from "../../redux/features/auth/thunk";
import { useAppDispatch } from "../../../store";

export const Register = () => {  
    const dispatch = useAppDispatch()
    const [isPatient, setIsPatient] = useState(false)

    const userRef = useRef()
    const passRef = useRef()
    const nameRef = useRef()
    const doctorCodeRef = useRef()
    const surnameRef = useRef()

    return (
        <Box direction="row" verticalAlign="center" height="100%" horizontalAlign="space-evenly">
            <Container padding="xLarge" showShadow borderRadius="standard" minWidth="300px">
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
                                // @ts-ignore
                                email: userRef.current!.value, 
                                // @ts-ignore
                                name: nameRef.current!.value, 
                                // @ts-ignore    
                                password: passRef.current!.value,
                                // @ts-ignore
                                surname: surnameRef.current!.value,
                                // @ts-ignore
                                doctorCode: isPatient ? null : doctorCodeRef!.current.value
                            }))}
                        />
                        <Button type="link" onClick={()=> window.location.href="/#/login"} label="Login here"/>
                    </Box>
                </Box>
            </Container>

            <WomanTick style={{maxWidth: "400px"}}/>
        </Box>
    )
}
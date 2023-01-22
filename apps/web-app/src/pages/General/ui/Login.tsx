import React, { useRef } from "react";
import { Box, Button, Container, Text, Input } from "ui-web";
// @ts-ignore
import { ReactComponent as WomanTick }  from '../../../assets/womanTick.svg'

export const Login = () => {    
    const userRef = useRef()
    const passRef = useRef()

    return (
        <Box direction="row" verticalAlign="center" height="100%" horizontalAlign="space-evenly">
            <Container padding="xLarge" showShadow borderRadius="standard">
                <Box direction="column" gap="large">
                    <Text text="Login" color="black" fontWeight="bold"/>
                    <Input ref={userRef} placeholder="email@email.com" type="email"/>
                    <Input ref={passRef} placeholder="********" type="password"/>
                    <Box direction="column" gap="small">
                        <Button type="primary" onClick={onLogin} label="Login"/>
                        <Button type="link" onClick={()=> window.location.href="/register"} label="Don’t have an account? Register here"/>
                    </Box>
                </Box>
            </Container>

            <WomanTick/>
        </Box>
    )
}
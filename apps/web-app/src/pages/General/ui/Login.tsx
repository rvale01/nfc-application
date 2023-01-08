import React, { useRef } from "react";
import { Box, Button, Container, Text, Input } from "ui-web";
// @ts-ignore
import { ReactComponent as WomanTick }  from '../../../assets/womanTick.svg'

export const Login = () => {
    const userRef = useRef()
    const passRef = useRef()

    const handleSubmit = () => {
        const obj = {
            username: userRef.current.value,
            password: passRef.current.value
        }
    }
    return (
        <Box direction="row" verticalAlign="center" height="100%" horizontalAlign="space-evenly">
            <Container padding="medium">
                <Box direction="column" gap="large">
                    <Text text="Login" color="black" fontWeight="bold"/>
                    <Input ref={userRef} placeholder="email@email.com" type="email"/>
                    <Input ref={passRef} placeholder="********" type="password"/>

                    <Button type="primary" onClick={handleSubmit} label="Login"/>
                    <Button type="link" onClick={()=> window.location.href="/register"} label="Don’t have an account? Register here"/>
                </Box>
            </Container>

            <WomanTick/>
        </Box>
    )
}
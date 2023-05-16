import React, { useRef, useState } from 'react';
import { Box, Button, Container, Input, Page, Text, Toggle } from 'ui-native'
import { useAppDispatch } from '../../../store';
import { register } from '../redux/thunk';

export const Registration = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const doctorCodeRef = useRef<HTMLInputElement>(null)
    const surnameRef = useRef<HTMLInputElement>(null)
    const [isDoctor, setIsDoctor] = useState(false);
    const [loading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()

    const onRegister = async() => {
        setIsLoading(true)
        dispatch(register({
            email: emailRef.current!.value,
            password: passwordRef.current!.value,
            doctorCode: doctorCodeRef.current!.value,
            name: nameRef.current!.value,
            surname: surnameRef.current!.value
        }))
        setIsLoading(false)
    }

    return(
        <Page background='white'>
            <Container padding={30}>
            <Box direction='column' gap='small'>
                <Text text='Register' align='center' size="title"/>
            <Input
                label='Email'
                name="email"
                keyboardType='email-address'
                textContentType='emailAddress'
                ref={emailRef}
            />
            <Input
                name="password"
                label='Password'
                secureTextEntry
                textContentType='newPassword'
                ref={passwordRef}
            />
            <Input
                label='Name'
                name="name"
                keyboardType='default'
                textContentType='givenName'
                ref={nameRef}
            />
            <Input
                name='Surname'
                label='Surname'
                keyboardType='default'
                textContentType='familyName'
                ref={surnameRef}
            />

            {
                isDoctor ?(
                    <Input 
                        name="id"
                        label='Doctor Number'
                        keyboardType='default'
                        ref={doctorCodeRef}
                        />
                    )
                : <></>
            }

            <Box direction='row' horizontalAlign='space-between' height='20%'>
                <Text
                    text={isDoctor ? "Doctor" : "Patient"}
                />
                <Toggle
                    defaultChecked={false}
                    checked={isDoctor}
                    onChange={(isChecked)=> setIsDoctor(isChecked)}
                />
            </Box>

            <Button
                label='Register'
                roundedStyle='rounded'
                type='primary'
                onPress={onRegister}
                isLoading={loading}
            />
            </Box>
            </Container>
        </Page>
    )
}
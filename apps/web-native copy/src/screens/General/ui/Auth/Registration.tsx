import React, { useRef, useState } from 'react';
import { Box, Button, Input, Page, Text, Toggle } from 'ui-native'
import { registerFunc } from 'shared-functions';

export const Registration = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const nameRef = useRef(null)
    const doctorCodeRef = useRef(null)
    const surnameRef = useRef(null)
    const [isDoctor, setIsDoctor] = useState(false);
    const [loading, setIsLoading] = useState(false)

    const onRegister = async() => {
        setIsLoading(true)
        await registerFunc({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            doctorCode: doctorCodeRef.current.value,
            name: nameRef.current.value,
            surname: surnameRef.current.value
        })
        setIsLoading(false)
    }

    return(
        <Page background='white'>
            <Input
                label='Email'
                keyboardType='email-address'
                textContentType='emailAddress'
                ref={emailRef}
            />
            <Input
                label='Password'
                keyboardType='visible-password'
                textContentType='newPassword'
                ref={passwordRef}
            />
            <Input
                label='Name'
                keyboardType='default'
                textContentType='givenName'
                ref={nameRef}
            />
            <Input
                label='Surname'
                keyboardType='default'
                textContentType='familyName'
                ref={surnameRef}
            />

            {
                isDoctor && (
                    <Input 
                        label='Doctor Number'
                        keyboardType='default'
                        textContentType='familyName'
                        ref={doctorCodeRef}
                        />
                    )
            }

            <Box direction='row' horizontalAlign='space-between'>
                <Text
                    text={isDoctor ? "Doctor" : "Patient"}
                />
                <Toggle
                    checked={isDoctor}
                    onChange={(isChecked)=> setIsDoctor(isChecked)}
                />
            </Box>

            <Button
                label='Login'
                roundedStyle='rounded'
                type='primary'
                onPress={onRegister}
                isLoading={loading}
            />
        </Page>
    )
}
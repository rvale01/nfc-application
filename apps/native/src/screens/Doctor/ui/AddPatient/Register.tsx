import React, { useRef, useState } from 'react';
import { Box, Button, Container, Input, Page, Text } from 'ui-native'
import { useAppDispatch } from '../../../../store';
import { addNewPatient } from '../../redux/thunk';

export const Registration = () => {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [doctorCode, setDoctorCode] = useState<string | null>(null);
    const [surname, setSurname] = useState<string | null>(null);

    const [loading, setIsLoading] = useState(false)

    const dispatch = useAppDispatch()

    const onRegister = async() => {
        setIsLoading(true)
        const data = {
            email: email,
            password: password,
            name: name,
            surname: surname
        }
        dispatch(addNewPatient({
          data  
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
                value={email}
                onChangeText={setEmail}
            />
            <Input
                name="password"
                label='Password'
                secureTextEntry
                textContentType='newPassword'
                value={password}
                onChangeText={setPassword}
            />
            <Input
                label='Name'
                name="name"
                keyboardType='default'
                textContentType='givenName'
                value={name}
                onChangeText={setName}
            />
            <Input
                name='Surname'
                label='Surname'
                keyboardType='default'
                textContentType='familyName'
                value={surname}
                onChangeText={setSurname}
            />
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
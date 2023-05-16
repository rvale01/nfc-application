import React, { useRef, useState, useEffect } from 'react';
import { Box, Button, Container, Input, Page, Text } from 'ui-native';
import { useAppDispatch } from '../../../store';
import firebase from 'firebase/app';
import { login } from '../redux/thunk';

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()
    
    const onLogin = async() => {
        setIsLoading(true)
        dispatch(login({
              email: email,
              password: password
            }))
        setIsLoading(false)
    }

  return (
    <Page background="white">
      <Container padding={30}>
        <Box direction='column' height='100%' verticalAlign='center' gap='medium'>
          <Text text='Login' size='title' align='center'/>
          <Input
            name='email'
            label="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            name='password'
            label="Password"
            textContentType="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button
                isLoading={loading}
                label="Login"
                roundedStyle="rounded"
                type="primary"
                onPress={onLogin}
            />
        </Box>
      </Container>
    </Page>
  );
};

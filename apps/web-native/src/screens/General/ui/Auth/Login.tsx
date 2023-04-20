import React, { useRef, useState } from 'react';
import { Box, Button, Input, Page } from 'ui-native';
import { loginFunc } from 'shared-functions';

export const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [loading, setIsLoading] = useState(false)

    const onLogin = async() => {
        setIsLoading(true)
        await loginFunc({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            })
        setIsLoading(false)
    }

  return (
    <Page background="white">
      <Input
        label="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        ref={emailRef}
      />
      <Input
        label="Password"
        keyboardType="visible-password"
        textContentType="password"
        ref={passwordRef}
      />
      <Box direction="row" horizontalAlign="center">
        <Button
            isLoading={loading}
            label="Login"
            roundedStyle="rounded"
            type="primary"
            onPress={onLogin}
        />
      </Box>
    </Page>
  );
};

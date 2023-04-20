import 'react-native-gesture-handler';
import * as React from 'react';
import { Stack } from '../../..'
import { Login } from '../Auth/Login';
import { Registration } from '../Auth/Registration';
import { Button, Page } from 'ui-native';

export const SwitchView = ({navigation}) => {

    return (
        <Page background='primary'>
            <Button
                label='Login'
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                label="Register"
                onPress={() => navigation.navigate('Registration')}
            />
        </Page>
    )
}
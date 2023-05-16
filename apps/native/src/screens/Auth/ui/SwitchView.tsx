import * as React from 'react';
import { Box, Button, Page, Text } from 'ui-native';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const SwitchView = ({navigation}: {navigation:NativeStackNavigationProp<ParamListBase>}) => {

    return (
        <Page background='white'>
            <Box gap='medium' horizontalAlign='center' verticalAlign='center' direction='column' height='100%'>
                <Text align='center' text='Welcome!' fontWeight='bold' size='title'/>
                <Text align='center' text='Choose an option to get started' fontWeight='bold' />
                <Button
                    label='Login'
                    onPress={() => navigation.navigate('Login')}
                />
                <Button
                    label="Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </Box>
        </Page>
    )
}
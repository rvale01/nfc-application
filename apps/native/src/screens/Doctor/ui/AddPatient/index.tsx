import * as React from 'react';
import { Box, Button, Page, Text } from 'ui-native';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const SwitchView = ({navigation}: {navigation:NativeStackNavigationProp<ParamListBase>}) => {

    return (
        <Page background='white'>
            <Box gap='medium' horizontalAlign='center' verticalAlign='center' direction='column' height='100%'>
                <Text align='center' text='Choose how you want to add a new patient' fontWeight='bold' />
                <Button
                    label='By code'
                    onPress={() => navigation.navigate('Code')}
                />
                <Button
                    label="By tap"
                    onPress={() => navigation.navigate('Tap')}
                />
                <Button
                    label="Register new patient"
                    onPress={() => navigation.navigate('RegisterPatient')}
                />
            </Box>
        </Page>
    )
}
import 'react-native-gesture-handler';
import * as React from 'react';
import { Stack } from '../..'
import { Login } from './Auth/Login';
import { Registration } from './Auth/Registration';
import { Introduction } from './Introduction';

export const IntroNavStack = () => {
    return (
        <>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Registration" component={Registration}/>
            <Stack.Screen name="Intro" component={Introduction} />
        </>
    )
}
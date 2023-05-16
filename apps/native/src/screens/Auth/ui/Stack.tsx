import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Login';
import { Registration } from './Registration';
import { SwitchView } from './SwitchView';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{'headerShown': false}}>
        <Stack.Screen name="SwitchView" component={SwitchView} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Registration} />
      </Stack.Navigator>
    );
  }
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UseCode } from './ByCode';
import { Registration } from './Register';
import { SwitchView } from '.';
import { ByTap } from './ByTap';

const Stack = createNativeStackNavigator();

export const AddPatientStack = () => {
    return (
      <Stack.Navigator screenOptions={{'headerShown': false}}>
        <Stack.Screen name="Switch" component={SwitchView} />
        <Stack.Screen name="Code" component={UseCode} />
        <Stack.Screen name="Tap" component={ByTap} />
        <Stack.Screen name="RegisterPatient" component={Registration} />
      </Stack.Navigator>
    );
  }
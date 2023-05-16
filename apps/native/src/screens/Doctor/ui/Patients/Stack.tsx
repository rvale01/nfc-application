import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Patients } from './index';
import { PatientDetails } from './PatientDetails';

const Stack = createNativeStackNavigator();

export const PatientDetailsStack = () => {
    return (
      <Stack.Navigator screenOptions={{'headerShown': false}}>
        <Stack.Screen name="Patient" component={Patients} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
      </Stack.Navigator>
    );
  }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PatientDetailsStack } from './ui/Patients/Stack';
import { Settings } from './ui/Settings';
import { AddPatientStack } from './ui/AddPatient/Stack'

const Tab = createBottomTabNavigator();

export const DoctorStack = () => {
    return (
        <Tab.Navigator screenOptions={{'headerShown': false}}>
            <Tab.Screen name="Patients" component={PatientDetailsStack} />
            <Tab.Screen name="Add" component={AddPatientStack} />
            <Tab.Screen name="Account" component={Settings} />
        </Tab.Navigator>    
    );
  }
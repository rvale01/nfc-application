import 'react-native-gesture-handler'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import {} from './General/ui/index'

export const Stack = createStackNavigator();

export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Init" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

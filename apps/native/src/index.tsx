// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthStack } from './screens/Auth/ui/Stack';
import { db } from 'shared-functions';
import { doc, getDoc } from "firebase/firestore"; 
import { Provider } from 'react-redux';
import { store } from './store';
import useAuth from './lib/UseContext';
import { Text } from 'react-native';
import { AuthContext, AuthProvider } from './lib/AuthContext';
import { DoctorStack } from './screens/Doctor/stack';

const checkUserType =  (userId: string) => {
  const [user, setUser] = React.useState<'doctor' | 'patient' | null>()
      // getDoc(doc(db, "patients", userId))
      // .then((userDoc)=> {
      //   if (userDoc.exists()) {
      //     return <Patient/>
      //   }
      // })
      
     getDoc(doc(db, "doctors", userId))
      .then((doctorDoc)=> {
        if (doctorDoc.exists()) setUser('patient')
      })
      
    if(user){
      return <DoctorStack/>
    }

    return null
};

const NavigationView = () => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    currentUser && currentUser.uid ? checkUserType(currentUser.uid as string) : <AuthStack/>
  )
}

function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Provider store={store}>
          <NavigationView/>
        </Provider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
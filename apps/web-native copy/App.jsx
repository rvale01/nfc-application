import * as React from 'react';
import { StyleSheet } from 'react-native';
import NavigationStack from './src/screens';
import { store } from './src/app/store'
import { AuthProvider } from './src/lib/contexts/AuthContext';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationStack/>
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/Contexts/auth';
import Routes from './src/routes';

console.disableYellowBox=true

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="auto" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};



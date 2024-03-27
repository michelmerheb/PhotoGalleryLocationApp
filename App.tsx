import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ImageProvider } from './src/utils/ImageStore';
import {enableLatestRenderer} from 'react-native-maps';
import AppNavigator from './src/components/AppNavigator';

enableLatestRenderer();


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageProvider>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </ImageProvider>
  );
} 
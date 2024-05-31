import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ImageProvider } from './src/utils/ImageStore';
import {enableLatestRenderer} from 'react-native-maps';
import Navigationcontainer from './src/navigations/NavigationContainer';

enableLatestRenderer();


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageProvider>
      <Navigationcontainer/>
    </ImageProvider>
  );
} 
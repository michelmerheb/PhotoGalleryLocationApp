import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen';
import MapViewScreen from '../screens/MapViewScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome'}} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{title: 'Camera'}} />
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} options={{title: 'Gallery'}} />
      <Stack.Screen name="MapViewScreen" component={MapViewScreen} options={{title: 'Map View'}} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen';
import MapViewScreen from '../screens/MapViewScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          size = focused ? 35 : 20;
          if (route.name === 'GalleryScreen') {
            iconName = 'image';
          } else if (route.name === 'CameraScreen') {
            iconName = 'camera';
          } else if (route.name === 'MapViewScreen') {
            iconName = 'map';
          }
          return <Ionicons name={iconName!} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        headerTitleStyle: {
          fontSize: 25,
        },
        headerStyle: {
          height: 50,
        },
      })}>
        <Tab.Screen name="GalleryScreen" component={GalleryScreen} options={{title: 'Gallery'}} />
      <Tab.Screen name="CameraScreen" component={CameraScreen} options={{title: 'Camera'}} />
      <Tab.Screen name="MapViewScreen" component={MapViewScreen} options={{title: 'Map View'}} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
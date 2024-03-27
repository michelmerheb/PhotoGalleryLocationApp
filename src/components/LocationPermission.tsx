import React from 'react';
import {View, StyleSheet, Text, Linking, Image, Alert} from 'react-native';

import Geolocation  from '@react-native-community/geolocation';


export default async function getLocationPermission(){
    const locationPermission = await Geolocation.requestAuthorization(
        (success: boolean) => console.log('Location permission granted:', success),
        (error : string) => {
          console.error('Location permission denied:', error);
          Alert.alert(
            "Location Permission Denied",
            "This app needs location access to store photo locations. Please enable location in your device settings.",
            [
              { text: "OK", onPress: () => Linking.openSettings() },
              { text: "Cancel", onPress: () => console.log("Cancelled") },
            ]
          )
        }
    );
}
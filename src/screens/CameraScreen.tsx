import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Button, TouchableOpacity, PermissionsAndroid, Text, Linking, Image, Alert} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import {useImages} from '../utils/ImageStore';
import Geolocation  from '@react-native-community/geolocation';
import getLocationPermission from '../components/LocationPermission';
import CameraButtons from '../components/CameraButtons';


export default function CameraScreen() {
  
  interface Location {
    coords: {
      latitude: number;
      longitude: number;
    }
  }

  interface ImageData {
    path: string;
    location?: Location;
  }

  const {addImage} = useImages(); 

  const camera = useRef(null);
  const device = useCameraDevice("back");

  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      await getLocationPermission();
      console.log(newCameraPermission);
    }
    getPermission();
    setShowCamera(true);
  }, []);

  const capturePhoto = async () => {
      if (camera.current !== null) {
        const photo = await (camera.current as any).takePhoto({flash: 'auto'});
        Geolocation.getCurrentPosition(
          (position : Location) => {
            const location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            setImageSource(photo.path);
            addImage(photo.path, location);
            setShowCamera(false);
            console.log(photo.path);
          },
          (error : any) => console.error('Error getting location:', error),
          {}
        );
      }   
    
  };
    

  const saveImage = async () => {
    try {
      await CameraRoll.saveAsset(imageSource, { type: "photo" });
      Alert.alert("Success", "Photo saved successfully");
    } catch (error) {
      console.error("Error saving photo:", error);
      Alert.alert("Error", "Failed to save photo");
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => capturePhoto()}
            />
          </View>
        </>
      ) : (
        <>
          {imageSource !== '' ? (
            <Image
              style={styles.image}
              source={{
                uri: `file://${imageSource}`,
              }}
            />
          ) : null}


          <View style={styles.buttonContainer}>
            <CameraButtons setShowCamera={setShowCamera} saveImage={saveImage}/>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
  },

  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#B2BEB5',

    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },

  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },

});



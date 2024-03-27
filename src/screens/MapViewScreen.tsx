import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useImages } from '../utils/ImageStore';
export default function MapViewScreen() {

  const { images } = useImages();

  const renderMarkers = () => {
    return images.map((image) => (
      image.location && (
        <Marker
          key={image.path}
          coordinate={{ latitude: image.location.latitude, longitude: image.location.longitude }}
        />
      )
    ));
  }; 
  
  return (
    <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       region={{
         latitude: 34.379407,
         longitude: 35.842577,
         latitudeDelta: 0.055,
         longitudeDelta: 0.5821,
       }}
     >
      {renderMarkers()}
     </MapView>
   </View>
  )
}

const DeviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: DeviceWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });


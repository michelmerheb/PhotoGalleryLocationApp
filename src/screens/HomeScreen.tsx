import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default function HomeScreen({navigation}: any) {

  const handleNavigation = () => {
    navigation.navigate('CameraScreen');
  }

  const handleNavigationGallery = () => {
    navigation.navigate('GalleryScreen');
  }

  const handleNavigationMapView = () => {
    navigation.navigate('MapViewScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={handleNavigation} style={styles.categoryView}><Text style={styles.categoryText}>Take Photo</Text></TouchableOpacity>
        <TouchableOpacity onPress={handleNavigationMapView} style={styles.categoryView}><Text style={styles.categoryText}>Map View</Text></TouchableOpacity>
        <TouchableOpacity onPress={handleNavigationGallery} style={styles.categoryView}><Text style={styles.categoryText}>View Gallery</Text></TouchableOpacity>
      </View>
    </View>

  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    box: {
        height: 400,
        backgroundColor: 'red',
        borderTopEndRadius: 20,
      },
      categoryView: {
        margin: 30,
        borderBottomWidth: 1,
        paddingBottom: 15,
      },
      categoryText: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
      }
})


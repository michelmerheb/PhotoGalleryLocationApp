import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, } from 'react-native';
import { useImages } from '../utils/ImageStore';
import PhotoItem from '../components/PhotoItem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fetchPhotos } from '../services/axiosapi';

    
const GalleryScreen = () => {
  const { images, removeImage  } = useImages();
  
  const numColumns = 2;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(index) => `image-${index}`}
        renderItem={({ item }) => (
          <PhotoItem item={item.path} onDelete={() => removeImage(item.path)} />
        )}
        numColumns={numColumns}
      />
    </View>
    </GestureHandlerRootView>
  );
};

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: DeviceWidth / 2 - 10,
    height: DeviceHeight / 4 - 20,
    margin: 5,
  },
});

export default GalleryScreen;

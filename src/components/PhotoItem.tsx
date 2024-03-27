import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

interface PhotoItemProps {
  item: string;
  onDelete: (item: string) => void;
}

const PhotoItem = ({ item, onDelete }: PhotoItemProps) => {
  const [showInfo, setShowInfo] = useState(false);

  const renderRightActions = () => {
    return (
      <TouchableOpacity onPress={() => onDelete(item)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity style={styles.container} onLongPress={() => setShowInfo(!showInfo)}>
        <Image source={{ uri: `file://${item}` }} style={styles.image} />
        {showInfo && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Photo Name: {item.split('/').pop()}</Text>
          </View>
        )}
      </TouchableOpacity>
    </Swipeable>
  );
  
};

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  image: {
    width: DeviceWidth / 2 - 10,
    height: DeviceHeight / 4 - 20,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  infoText: {
    color: 'white',
    padding: 5,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 100,
    height: '100%',
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default PhotoItem;

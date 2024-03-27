import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

interface CameraButtonsProps {
    setShowCamera: (showCamera: boolean) => void;
    saveImage: () => Promise<void> | void;
}

export default function CameraButtons({setShowCamera, saveImage}: CameraButtonsProps){
    return(
        <View style={styles.buttons}>
            <TouchableOpacity
            style={styles.retakeButton}
            onPress={() => setShowCamera(true)}>
            <Text style={styles.retakeText}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.savePhotoButton}
            onPress={saveImage}>
            <Text style={styles.saveText}>Save Photo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    retakeText: {
        color: '#77c3fb', 
        fontWeight: '500'
      },
      saveText:{
        color: 'white',
        fontWeight: '500'
      },
      retakeButton: {
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#77c3ec',
      },
      savePhotoButton: {
        backgroundColor: '#77c3ec',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
      }
})
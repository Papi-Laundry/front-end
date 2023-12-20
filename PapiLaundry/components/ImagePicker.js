import React from 'react';
import { Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent = ({ onImageSelected, onDismiss }) => {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled && result.assets.length > 0) {
        onImageSelected(result.assets[0].uri);
      } else {
        onDismiss();
      }
    } catch (error) {
      onDismiss();
    }
  };

  return <Button title="Select Image" onPress={selectImage} />;
};

export default ImagePickerComponent;
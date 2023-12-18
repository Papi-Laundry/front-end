import React, { useState } from 'react';
import { View, Image, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Button } from './Button';
import { Ionicons } from '@expo/vector-icons';

export const ImagePickerComponent = () => {
    const [imageSource, setImageSource] = useState(null);

    const selectImage = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = Platform.OS === 'android' ? response.uri : response.uri.replace('file://', '');
                setImageSource(source);
            }
        });
    };

    return (
        <View >
            {imageSource && <Image source={{ uri: imageSource }} style={{ width: 200, height: 200 }} />}
            <Button
                title="Select Image"
                onPress={selectImage}
                buttonStyle={{ backgroundColor: '#e9f7f7', }}
                textStyle={{color: '#898989'}}
            >
                <Ionicons name="image" size={20} color="#898989" />
                 Upload Image</Button>
                 
        </View>
    );
};


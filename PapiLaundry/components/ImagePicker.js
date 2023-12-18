import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { Image, View } from 'react-native';
import { Button } from './Button';

export const ImagePickerComponent = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 15 }} />}
            <Button
                title="Select Image"
                onPress={pickImage}
                buttonStyle={{ backgroundColor: '#e9f7f7', width: 388 }}
                textStyle={{ color: '#6c6c6c' }}
            >
                Select Image</Button>
        </View>
    );
};


import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../../styles/style';
import { Header } from 'react-native-elements/dist/header/Header';
import { Ionicons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import ImagePickerComponent from '../../components/ImagePicker';
import { Button } from '../../components/Button';
import BASE_URL from "../../constant/constant";
import Maps from '../../components/Maps';

export default function AddLaundryScreen({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [laundryName, setLaundryName] = useState('');
  // const [address, setAddress] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [coordinates, setCoordinates] = useState(null)

  useEffect(() => {
    // Fetch the access token from SecureStore when the component mounts
    getAccessToken();
  }, []);

  useEffect(() => {
    console.log(coordinates, "in coord")
  }, [coordinates])

  const getAccessToken = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
    //   console.log(token);
      setAccessToken(token);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  const handleImageSelected = (imageUri) => {
    console.log('Selected Image URI:', imageUri);
    setSelectedImage(imageUri);
  };

  const handleImagePickerDismissed = () => {
    console.log('Image picker dismissed');
  };

  const handleSubmit = async () => {
    if (selectedImage && laundryName.trim() !== '' ) {
      try {
        const formData = new FormData();
        formData.append('laundryName', laundryName);
        formData.append('coordinates', coordinates);
        formData.append('laundryPicture', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: 'laundryImage.jpg',
        });
        console.log(formData, "formdata");
        // Include the access token in the headers
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        };
        console.log(headers);
        // Replace 'YOUR_API_ENDPOINT' with your actual backend endpoint
        const response = await axios.post(`${BASE_URL}/laundries`, formData, {
          headers,
        });
  
        console.log('Backend Response:', response.data);
        // Handle the response, e.g., show success message or navigate to another screen
        navigation.goBack();
      } catch (error) {
        console.error('Error submitting data:', error);
        // Handle error, show an error message, etc.
      }
    } else {
      console.log('Please fill in all the fields and select an image');
      // Additional debugging info
      console.log('selectedImage:', selectedImage);
      console.log('laundryName:', laundryName);
      console.log('coordinates:', coordinates);
    }
  };  
  
return (
    <>
        <Header
            backgroundColor="white"
            placement="center"
            leftComponent={
                <Ionicons
                    name="chevron-back"
                    size={24}
                    color="black"
                    onPress={() => navigation.goBack()}
                />
            }
            centerComponent={{ text: 'Add New Laundry', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
        />
        <View style={styles.bgContainer}>

            <Text style={styles.textLabel}>Address</Text>
            <View style={{
              height: 250
            }}>
              <Maps userPoint={{
                setCoordinates
              }} style={{ alignSelf: 'center' }}/>
            </View>

              <Text style={styles.textLabel}>Laundry Name</Text>
              <Input
                  style={styles.inputStyleCustom}
                  inputContainerStyle={{ borderBottomWidth: 0 }}
                  value={laundryName}
                  onChangeText={(text) => setLaundryName(text)}
              />

            <Text style={styles.textLabel}>Laundry Picture</Text>
            <ImagePickerComponent onImageSelected={handleImageSelected} onDismiss={handleImagePickerDismissed} />

            {selectedImage && 
                <View style={styles.centeredContainer}>
                    <Image source={{ uri: selectedImage }} style={styles.centeredImage} />
                </View>
            }

            <Button onPress={handleSubmit}>Submit</Button>
        </View>
    </>
)
}
import { Button, Image, Text, View } from "react-native";
import { styles } from "../../styles/style";
import { Header, Input } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { Button as ButtonTwo } from "../../components/Button";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import BASE_URL from "../../constant/constant";

export default function EditProfileScreen({ navigation }) {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null)
    const [accessToken, setAccessToken] = useState('');
    useEffect(() => {
        // Fetch the access token from SecureStore when the component mounts
        getAccessToken();
      }, []);

    const getAccessToken = async () => {
        try {
          const token = await SecureStore.getItemAsync('token');
        //   console.log(token);
          setAccessToken(token);
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
    };

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

    const handleSubmit = async () => {
        try {
          if (!image || name.trim() === '' ){
            console.log('Please fill in all the fields and select an image');
            return;
          }
      
          // Set a loading state here if necessary
      
          const formData = new FormData();
          formData.append('name', name);
          formData.append('laundryPicture', {
            uri: image,
            type: 'image/jpeg',
            name: 'laundryImage.jpg',
          });
      
          const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          };
      
          const response = await axios.put(`${BASE_URL}/profiles`, formData, { headers });
      
          console.log('Backend Response:', response);
      
          // Handle the response, e.g., show success message or navigate to another screen
          navigation.goBack();
        } catch (error) {
          console.error('Error submitting data:', error);
      
          // Handle the error, e.g., display an error message to the user
        } finally {
          // Reset loading state if needed
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
                centerComponent={{ text: 'Profile Settings', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <View style={styles.bgContainerProfile}>
                <View style={styles.profileHeaderEdit}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: image ? image : 'https://images.unsplash.com/photo-1579783483458-83d02161294e?q=80&w=2897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    />


                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                            color='#074295'
                            title="Select Image"
                            onPress={pickImage}
                            fontSize={10}
                        >
                            Select Image</Button>
                    </View>

                    <Input
                    placeholder="Username"
                        style={[styles.inputStyleCustom, {marginTop: 20}]}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
               
                    <ButtonTwo onPress={handleSubmit}>Sumbit</ButtonTwo>
                </View>
            </View>
        </>
    )
}
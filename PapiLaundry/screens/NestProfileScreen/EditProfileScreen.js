import { Button, Image, Text, View } from "react-native";
import { styles } from "../../styles/style";
import { Header, Input } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { Button as ButtonTwo } from "../../components/Button";
import axios from "axios";
import BASE_URL from "../../constant/constant";
import { LoginContext } from "../../context/LoginContext";
import { UserContext } from "../../context/UserContext";

export default function EditProfileScreen({ navigation }) {

    const { getToken } = useContext(LoginContext)
    const { user } = useContext(UserContext)
    const [image, setImage] = useState(user.image);
    const [name, setName] = useState(user.name)
    const [loading, setLoading] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleSubmit = async () => {
        try {
          setLoading(true)
          const accessToken = await getToken()
      
          const formData = new FormData();
          formData.append('name', name);
          formData.append('picture', {
            uri: image,
            type: 'image/jpeg',
            name: 'laundryImage.jpg',
          });
      
          const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          };
      
          const response = await axios.put(`${BASE_URL}/profiles`, formData, { headers });

          navigation.goBack();
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(true)
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
                        source={{ uri: image}}
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
               
                    {loading ? 
                    <ButtonTwo buttonStyle={{
                      backgroundColor: 'grey'
                    }}>Loading</ButtonTwo>
                  :
                  <ButtonTwo onPress={handleSubmit}>Submit</ButtonTwo>}
                </View>
            </View>
        </>
    )
}
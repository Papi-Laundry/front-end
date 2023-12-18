import { Button, Image, Text, View } from "react-native";
import { styles } from "../../styles/style";
import { Header, Input } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { Button as ButtonTwo } from "../../components/Button";

export default function EditProfileScreen({ navigation }) {
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
                    />
               
                    <ButtonTwo>Sumbit</ButtonTwo>
                </View>
            </View>
        </>
    )
}
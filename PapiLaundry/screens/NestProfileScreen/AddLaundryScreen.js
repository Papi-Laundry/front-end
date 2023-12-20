import React, { useState, useContext } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../../styles/style';
import { Header } from 'react-native-elements/dist/header/Header';
import { Ionicons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import axios from 'axios';
import ImagePickerComponent from '../../components/ImagePicker';
import { Button } from '../../components/Button';
import BASE_URL from "../../constant/constant";
import Maps from '../../components/Maps';
import { LoginContext } from '../../context/LoginContext';

export default function AddLaundryScreen({ navigation }) {
  const { getToken } = useContext(LoginContext)
  const [selectedImage, setSelectedImage] = useState(null);
  const [laundryName, setLaundryName] = useState('');
  const [laundryLocation, setLaundryLocation] = useState('');
  const [coordinates, setCoordinates] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleImageSelected = (imageUri) => {
    setSelectedImage(imageUri);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true)
      if (!selectedImage || laundryName.trim() === '' || laundryLocation.trim() === '' || !coordinates) {
        setErrorMessage("Please fill in the blank")
        return;
      }

      const accessToken = await getToken()
      const formData = new FormData();
      formData.append('location', laundryLocation)
      formData.append('name', laundryName);
      formData.append('coordinates', JSON.stringify(coordinates));
      formData.append('picture', {
        uri: selectedImage,
        type: 'image/jpeg',
        name: `${laundryName} - ${new Date().getTime()}.jpg`,
      });
  
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      };
  
      const response = await axios.post(`${BASE_URL}/laundries`, formData, { headers });
      navigation.goBack();
    } catch (error) {
      setErrorMessage(error.response.data.message)
    } finally {
      setLoading(false)
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
        <ScrollView style={styles.bgContainer}>

            <Text style={styles.textLabel}>Address</Text>
            <View style={{
              height: 250
            }}>
              <Maps userPoint={{
                setCoordinates
              }} style={{ alignSelf: 'center' }}/>
            </View>
              {errorMessage && 
              <View style={{
                padding: 10,
                marginHorizontal: 10
              }}>
                <Text style={{
                  color: '#FFA063'
                }}>{errorMessage}</Text>
              </View>}
              <Text style={styles.textLabel}>Laundry Location</Text>
              <Input
                  style={styles.inputStyleCustom}
                  inputContainerStyle={{ borderBottomWidth: 0 }}
                  value={laundryLocation}
                  onChangeText={(text) => setLaundryLocation(text)}
              />

              <Text style={styles.textLabel}>Laundry Name</Text>
              <Input
                  style={styles.inputStyleCustom}
                  inputContainerStyle={{ borderBottomWidth: 0 }}
                  value={laundryName}
                  onChangeText={(text) => setLaundryName(text)}
              />

            <Text style={styles.textLabel}>Laundry Picture</Text>
            <ImagePickerComponent onImageSelected={handleImageSelected} />

            {selectedImage && 
                <View style={styles.centeredContainer}>
                    <Image source={{ uri: selectedImage }} style={styles.centeredImage} />
                </View>
            }
            {loading ? 
            <Button buttonStyle={{
              backgroundColor: "grey"
            }}>Loading</Button>:
            <Button onPress={handleSubmit}>Submit</Button>
            }
        </ScrollView>
    </>
)
}
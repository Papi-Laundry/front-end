import { Text, View, Image } from "react-native";
import { styles } from "../../styles/style";
import { Header } from "react-native-elements/dist/header/Header";
import { Ionicons } from '@expo/vector-icons';
import { Input } from "react-native-elements";
import { Button } from "../../components/Button";
import React, { useEffect, useState, useContext } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import axios from 'axios'
import ImagePickerComponent from '../../components/ImagePicker';
import { ScrollView } from "react-native";
import { LoginContext } from "../../context/LoginContext";
import BASE_URL from "../../constant/constant";

export default function AddServiceScreen({ navigation, route }) {
    const { laundryId } = route.params

  const { getToken } = useContext(LoginContext)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [serviceName, setServiceName] = useState('')
    const [servicePrice, setServicePrice] = useState('')
    const [serviceDescription, setServiceDescription] = useState('')

    const [selectedImage, setSelectedImage] = useState(null);
    const [selected, setSelected] = React.useState(null);

    const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/categories`)

      const categoriesData = response.data.map(category => {
        return {
            key: category.id,
            value: category.name
        }
      })
      setCategories(categoriesData)
    } catch (error) {
      console.log(error)
    }
  }

  const handleImageSelected = (imageUri) => {
    setSelectedImage(imageUri);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true)
      if (!selectedImage || !selected || serviceName.trim() === '' || servicePrice.trim() === '' || serviceDescription.trim() === '') {
        setErrorMessage("Please fill in the blank")
        return;
      }
      if(!Number(servicePrice)) {
        setErrorMessage("Invalid number price")
        return
    }

      const accessToken = await getToken()
      const formData = new FormData();
      formData.append('price', Number(servicePrice))
      formData.append('name', serviceName);
      formData.append('description', serviceDescription)
      formData.append('categoryId', Number(selected))
      formData.append('picture', {
        uri: selectedImage,
        type: 'image/jpeg',
        name: `${serviceName} - ${new Date().getTime()}.jpg`,
      });
  
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      };
  
      const response = await axios.post(`${BASE_URL}/laundries/${laundryId}/products`, formData, { headers });
      
      navigation.goBack();
    } catch (error) {
        console.log(error)
      setErrorMessage(error.response.data.message)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchCategories()
  }, [])
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
                centerComponent={{ text: 'Add New Service', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <ScrollView style={styles.bgContainer}>
            {errorMessage && 
              <View style={{
                padding: 10,
                marginHorizontal: 10
              }}>
                <Text style={{
                  color: '#FFA063'
                }}>{errorMessage}</Text>
              </View>}
                <Text style={styles.textLabel}>Service Name</Text>
                <Input
                    style={styles.inputStyleCustom}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    onChangeText={(text) => setServiceName(text)}
                />

                <Text style={styles.textLabel}>Price</Text>
                <Input
                    style={styles.inputStyleCustom}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    onChangeText={(text) => setServicePrice(text)}
                />

                <Text style={styles.textLabel}>Description</Text>
                <Input
                    style={styles.inputStyleCustom}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    onChangeText={(text) => setServiceDescription(text)}
                />
                <Text style={styles.textLabel}>Service Category</Text>
                <View style={{paddingHorizontal: 20, marginBottom: 15}}>
                    <SelectList
                        setSelected={(val) => {
                            setSelected(val)
                        }}
                        data={categories}
                        save="key"
                        placeholder='Choose one'
                        boxStyles={{ borderRadius: 15, backgroundColor: '#e9f7f7', borderWidth: 0 }}
                    />
                </View>


                <Text style={styles.textLabel}>Service Image</Text>
                
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
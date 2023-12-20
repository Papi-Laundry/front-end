import { View, ScrollView, Alert } from "react-native";
import { styles } from "../../styles/style";
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { CardService } from "../../components/CardService";
import FloatingButton from "../../components/FloatingButton";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "../../context/LoginContext";

export default function MyServicesScreen({ navigation, route }) {
  const { laundry } = route.params

  const { getToken } = useContext(LoginContext)

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/laundries/${laundry.id}/products`)
        
        setProducts(response.data)
        } catch (error) {
        console.log(error)
        }
    }

    const deleteLaundry = async () => {
        try {
            const token = await getToken()
            const response = await axios({
                method: 'DELETE',
                url: `${process.env.EXPO_PUBLIC_SERVER_URL}/laundries/${laundry.id}`,
                headers: {
                    "Authorization": "Bearer " + token
                }
            })

            navigation.goBack()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    
    const handleButtonPress = () => {
        console.log('Tombol ditekan!');
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
                centerComponent={{ text: 'All Services', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
                rightComponent={
                    <Ionicons name="trash-outline" size={24} color="black" 
                        onPress={() => {
                            Alert.alert(`Delete ${laundry.name}`, 'You want to delete?', [
                                {
                                    text: 'Yes',
                                    onPress: deleteLaundry
                                },
                                {
                                    text: 'No'
                                }
                            ])
                        }}
                    />
                }
            />
            <View style={styles.bgContainer}>
                <ScrollView>
                    {products.map(product => {
                        return <CardService key={product.id} product={product}/>
                    })}
                </ScrollView>
                <FloatingButton
                    onPress={() => navigation.navigate("AddServiceScreen")}
                    buttonStyle={{ backgroundColor: '#074295' }}
                    textStyle={{ fontSize: 15 }}
                    text={<Ionicons name="add" size={30} color={'white'} />}
                />
            </View>
        </>
    )
}
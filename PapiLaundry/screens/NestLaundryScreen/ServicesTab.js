import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/style";
import { Ionicons } from "@expo/vector-icons";
import { CardService } from "../../components/CardService";
import axios from 'axios';

export function ServicesTab({ navigation, laundryId }) {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/laundries/${laundryId}/products`)
      
      setProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
      <View style={styles.bgContainer}>
        <ScrollView scrollEventThrottle={16} contentContainerStyle={{
          paddingBottom: 80
        }}>
          {products.map(product => {
            return <CardService key={product.id} product={product}/>
          })}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => { navigation.navigate("CheckoutScreen");
            // Logika untuk menangani saat tombol checkout ditekan
            // if (isShoesChecked) {
            //     navigation.navigate("CheckoutScreen");
            // } else {
            //     console.log("Pilih setidaknya satu item untuk checkout.");
            // }
        }}
      >
        <Text style={styles.floatingButtonText}>Checkout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.floatingButtonLeft} >
        <Ionicons name="chatbox" style={styles.floatingButtonIcon} />
      </TouchableOpacity>
    </>
  );
}

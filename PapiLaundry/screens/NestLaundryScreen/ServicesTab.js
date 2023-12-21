import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/style";
import { Ionicons } from "@expo/vector-icons";
import { CardService } from "../../components/CardService";
import axios from 'axios';
import { Alert } from "react-native";
import { useContext } from 'react'
import { UserContext } from "../../context/UserContext";

<<<<<<< HEAD
export function ServicesTab({ navigation, laundryId, laundry }) {
=======
export function ServicesTab({ navigation, laundryId, laundryOwner}) {
>>>>>>> 401c749e22ababdde2b2a437d01411770374d415
  const [products, setProducts] = useState([])
  const [checkout, setCheckout] = useState({})
  const { user } = useContext(UserContext)

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/laundries/${laundryId}/products`)

      const currentCheckout = {}
      response.data.forEach(product => {
        currentCheckout[product.id] = {
          checkout: false
        }
      });

      setCheckout(currentCheckout)
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
            return <CardService key={product.id} product={product} setCheckout={setCheckout}/>
          })}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => { 
          const isCheckout = []

          for(let i in checkout) {
            if(checkout[i].checkout === true) {
              const productCheckout = {
                ...checkout[i].data,
                total: checkout[i].total
              }
              isCheckout.push(productCheckout)
            }
          }

          if(isCheckout.length > 0) {
            if(laundry.owner.userId !== user.id) {
              navigation.navigate("CheckoutScreen", { isCheckout }, [{
                text: "OK"
              }]);
            } else {
              Alert.alert('Error', 'This is your laundry!')
            }
          } else {
            Alert.alert('Error', 'Please choose at least one product to next!')
          }
        }}
      >
        <Text style={styles.floatingButtonText}>Checkout</Text>
      </TouchableOpacity>

<<<<<<< HEAD
      <TouchableOpacity style={styles.floatingButtonLeft} onPress={() => {
        if(laundry.owner.userId !== user.id) {
          navigation.navigate("MessageScreen", { laundry })
        } else {
          Alert.alert('Error', 'This is your laundry!')
        }
      }} >
=======
      <TouchableOpacity 
      onPress={() => { navigation.navigate("MessageScreen", { laundryOwner })}} 
      style={styles.floatingButtonLeft} >
>>>>>>> 401c749e22ababdde2b2a437d01411770374d415
        <Ionicons name="chatbox" style={styles.floatingButtonIcon} />
      </TouchableOpacity>
    </>
  );
}

import React, { useState, useContext } from "react";
import { Image, View, Text } from "react-native"
import { styles } from "../styles/style";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { toIDR } from "../helpers/converter";
import { Button } from "./Button";
import axios from 'axios'
import { LoginContext } from "../context/LoginContext";

export const CardService = ({ product, setCheckout, isMyServices }) => {
  const [checkboxState, setCheckboxState] = React.useState(false);
  const { getToken } = useContext(LoginContext)


  const [count, setCount] = useState(1);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  }

  const deleteService = async () => {
    try {
      const token = await getToken()
      await axios({
        method: 'DELETE',
        url: `${process.env.EXPO_PUBLIC_SERVER_URL}/laundries/${isMyServices.laundryId}/products/${product.id}`,
        headers: {
          "Authorization" : "Bearer " + token
        }
      })

      isMyServices.setLoad(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <View
        style={styles.cardContainerService}
      >
        <Image
          style={styles.imageServices}
          source={{
            uri: product.image,
          }}
        />
        <View style={styles.detailsServices}>
          <Text style={styles.title}>{product.name}</Text>
        </View>

        <View style={{ display: 'flex', justifyContent: 'center', }}>
          <Text style={{ color: 'black', flexWrap: 'wrap', flex: 1 }}>
            {toIDR(product.price)}
          </Text>
          <Text>
            {product.description}
          </Text>
        </View>

        {isMyServices === undefined ?
        <>
        <View style={styles.containerCounter}>
          <RNBounceable style={styles.incButton} onPress={() => {
            setCheckboxState(false)
            setCheckout(current => {
              return {
                ...current,
                [product.id]: {
                  checkout: false,
                }
              }
            })
            decrement()
          }}><Text style={styles.counterTextIcon}>-</Text></RNBounceable>
          <View style={styles.incButtonText}>
            <Text style={styles.counterText}>{count}</Text>
          </View>
          <RNBounceable style={styles.incButton} onPress={() => {
            increment()
            setCheckout(current => {
              return {
                ...current,
                [product.id]: {
                  checkout: false,
                }
              }
            })
            setCheckboxState(false)
          }}><Text style={styles.counterTextIcon}>+</Text></RNBounceable>
        </View>

        <RNBounceable
          style={{
            height: 50,
            width: "100%",
            backgroundColor: checkboxState ? '#FFB559' : '#fff0dd',
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setCheckout(current => {
              return {
                ...current,
                [product.id]: {
                  checkout: !checkboxState,
                  total: count,
                  data: product
                }
              }
            })
            setCheckboxState(!checkboxState)
          }}
        >
          <Text style={{ color: checkboxState ? 'white' : 'black', fontWeight: 'bold' }}>{checkboxState ? 'Added!' : 'Select Product'}</Text>
        </RNBounceable>
        </> :
        <>
            <Button onPress={deleteService}
            buttonStyle={{
              backgroundColor: '#FFA063'
            }}>Delete</Button>
        </>}
      </View>
    </>
  )
}
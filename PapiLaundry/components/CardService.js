import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native"
import { styles } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";

export const CardService = ({ children, onPress, product }) => {
  const [isShoesChecked, setIsShoesChecked] = useState(false);
  const [checkboxState, setCheckboxState] = React.useState(false);

  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  }

  return (
    <>
      <View
        style={styles.cardContainerService}
        onPress={() => setIsShoesChecked(!isShoesChecked)}
      >
        <Image
          style={styles.imageServices}
          source={{
            uri: product.image,
          }}
        />
        <View style={styles.detailsServices}>
          <Text style={styles.title}>Shoes Cleaning</Text>
        </View>

        <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black', flexWrap: 'wrap', flex: 1 }}>
            {'RP. 100.000 | Instant'}
          </Text>
        </View>

        <View style={styles.containerCounter}>
          <RNBounceable style={styles.incButton} onPress={increment}><Text style={styles.counterTextIcon}>+</Text></RNBounceable>
          <View style={styles.incButtonText}>
            <Text style={styles.counterText}>{count} Pair</Text>
          </View>
          <RNBounceable style={styles.incButton} onPress={decrement}><Text style={styles.counterTextIcon}>-</Text></RNBounceable>
        </View>

        <RNBounceable
          style={{
            height: 50,
            width: "100%",
            backgroundColor: checkboxState ? '#41d24e' : '#FFB559',
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setCheckboxState(!checkboxState)}
        >
          <Text style={{ color: "#fff", fontWeight: 'bold' }}>{checkboxState ? 'Added!' : 'Select Product'}</Text>
        </RNBounceable>
      </View>
    </>
  )
}
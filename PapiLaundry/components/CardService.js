import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native"
import { styles } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

export const CardService = ({ children, onPress, product }) => {
  const [isShoesChecked, setIsShoesChecked] = useState(false);

  return (
    <>
      <TouchableOpacity
          style={styles.cardContainerService}
          onPress={() => setIsShoesChecked(!isShoesChecked)}
      >
        <Image
          style={styles.imageServices}
          source={{
            uri:product.image,
          }}
        />
        <View style={styles.detailsServices}>
          <Text style={styles.title}>Shoes Cleaning</Text>
          <Text style={styles.subtitle}>1 Pair</Text>
          <TouchableOpacity
            style={styles.radioButtonServices}
            onPress={() => setIsShoesChecked(true)}
          >
            <RadioButton.Android
              status={isShoesChecked ? "checked" : "unchecked"}
              onPress={() => setIsShoesChecked(true)}
            />
            <View style={styles.meters}>
              <Ionicons name="pricetag" />
              <Text>RP. 100.000 | Instant</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.radioButtonServices}
              onPress={() => setIsShoesChecked(false)}
          >
            <RadioButton.Android
              status={!isShoesChecked ? "checked" : "unchecked"}
              onPress={() => setIsShoesChecked(false)}
            />
              <View style={styles.meters}>
                <Ionicons name="pricetag" />
                <Text>RP. 50.000 | Regular</Text>
              </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  )
}
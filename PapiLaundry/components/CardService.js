import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native"
import { styles } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

export const CardService = ({ children, onPress }) => {
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
                        uri:
                            "https://img.freepik.com/free-photo/close-up-man-cleaning-shoes-while-getting-ready-wedding-ceremony_637285-913.jpg?w=1800&t=st=1702738079~exp=1702738679~hmac=be7420b64daf2c058dd1a93876799b5baee3d018d8d137ae1a954ea9db737ca9",
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
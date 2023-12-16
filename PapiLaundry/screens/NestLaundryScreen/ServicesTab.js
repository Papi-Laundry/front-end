import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/style";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";


export function ServicesTab({ navigation }) {
    const [isShoesChecked, setIsShoesChecked] = useState(false);
    const [isClothesChecked, setIsClothesChecked] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    const handleScroll = (event) => {
        const currentScrollPosition = event.nativeEvent.contentOffset.y;
        const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
        const contentHeight = event.nativeEvent.contentSize.height;

        const isBottom = currentScrollPosition + scrollViewHeight >= contentHeight - 20;
        setIsAtBottom(isBottom);
    };
    return (
        <>
            <View style={styles.bgContainer}>
                <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
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

                    <TouchableOpacity
                        style={styles.cardContainerService}
                        onPress={() => setIsClothesChecked(!isClothesChecked)}
                    >
                        <Image
                            style={styles.imageServices}
                            source={{
                                uri:
                                    "https://img.freepik.com/free-photo/close-up-man-cleaning-shoes-while-getting-ready-wedding-ceremony_637285-913.jpg?w=1800&t=st=1702738079~exp=1702738679~hmac=be7420b64daf2c058dd1a93876799b5baee3d018d8d137ae1a954ea9db737ca9",
                            }}
                        />
                        <View style={styles.detailsServices}>
                            <Text style={styles.title}>Clothes Cleaning</Text>
                            <Text style={styles.subtitle}>1 KG</Text>
                            <TouchableOpacity
                                style={styles.radioButtonServices}
                                onPress={() => setIsClothesChecked(true)}
                            >
                                <RadioButton.Android
                                    status={isClothesChecked ? "checked" : "unchecked"}
                                    onPress={() => setIsClothesChecked(true)}
                                />
                                <View style={styles.meters}>
                                    <Ionicons name="pricetag" />
                                    <Text>RP. 10.000</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.radioButtonServices}
                                onPress={() => setIsClothesChecked(false)}
                            >
                                <RadioButton.Android
                                    status={!isClothesChecked ? "checked" : "unchecked"}
                                    onPress={() => setIsClothesChecked(false)}
                                />
                                <View style={styles.meters}>
                                    <Ionicons name="pricetag" />
                                    <Text>RP. 20.000</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {isAtBottom && (
                <View style={{ height: 80, backgroundColor: 'white', }}>
                </View>
            )}

            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => {
                    // Logika untuk menangani saat tombol checkout ditekan
                    if (isShoesChecked || isClothesChecked) {
                        navigation.navigate("CheckoutScreen");
                    } else {
                        console.log("Pilih setidaknya satu item untuk checkout.");
                    }
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

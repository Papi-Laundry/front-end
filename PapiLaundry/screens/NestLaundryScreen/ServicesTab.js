import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/style";
import { Ionicons } from "@expo/vector-icons";
import { CardService } from "../../components/CardService";



export function ServicesTab({ navigation }) {
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
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                </ScrollView>
            </View>
            {isAtBottom && (
                <View style={{ height: 80, backgroundColor: 'white', }}>
                </View>
            )}

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

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export function CheckoutScreen({ navigation }) {
    return (
        <SafeAreaView>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="ios-arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Checkout</Text>
                <View style={{ width: 25 }}></View>
            </View>
        </SafeAreaView>
    )
}

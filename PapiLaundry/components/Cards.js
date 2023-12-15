import { Card } from "@rneui/base"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from "../styles/style"

export const Cards = ({ title, subtitle, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => console.log('Card Pressed')}>
            <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <View style={styles.details}>
                <Text style={styles.title}>Home Cleaning</Text>
                <Text style={styles.subtitle}>By Emran Emon</Text>
            </View>
        </TouchableOpacity>
    )
}

// title="Home Cleaning"
// subtitle="By Emran Emon"
// image="https://example.com/image.jpg"
// onPress={() => console.log('Card Pressed')}
import { Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from "../styles/style"
import { Ionicons } from '@expo/vector-icons';

export const Cards = ({ name, subtitle, image, distance }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => console.log('Card Pressed')}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.details}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <View style={styles.meters}>
                    <Ionicons name="location" />
                    <Text>{distance} Away</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
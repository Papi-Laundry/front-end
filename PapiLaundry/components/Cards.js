import { Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from "../styles/style"
import { Ionicons } from '@expo/vector-icons';
import { getDistance } from "../helpers/location";

export const Cards = ({ laundry, onPress, locationUser }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />

            <View style={styles.details}>
                <Text style={styles.title}>{laundry.name}</Text>
                <Text style={styles.subtitle}>{laundry.location}</Text>
                <View style={styles.meters}>
                    <Ionicons name="location" />
                    <Text>± {getDistance(locationUser, { longitude: laundry.locationPoint.coordinates[1], latitude: laundry.locationPoint.coordinates[0] })} Away</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
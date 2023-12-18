import { Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from "../styles/style"
import { Ionicons } from '@expo/vector-icons';


export const Cards = ({navigation, route, onPress}) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <View style={styles.details}>
                <Text style={styles.title}>Laundry</Text>
                <Text style={styles.subtitle}>Laundry</Text>
                <View style={styles.meters}>
                    <Ionicons name="location" />
                    <Text>100Km Away</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
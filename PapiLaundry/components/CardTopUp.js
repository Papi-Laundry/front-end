import axios from "axios";
import { useContext } from "react";
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { LoginContext } from "../context/LoginContext";
import { styles } from "../styles/style";
import { Ionicons } from '@expo/vector-icons';

export default function CardTopUp({ price, toWeb }) {

    const { getToken } = useContext(LoginContext)

    const handleTopup = async () => {
        try {
            const token = await getToken()
            const response = await axios({
                method: 'POST',
                url: `${process.env.EXPO_PUBLIC_SERVER_URL}/transactions/`,
                headers: {
                    "Authorization": "Bearer " + token
                },
                data: {
                    price
                }
            })

            toWeb(response.data.redirect_url)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={handleTopup}>
            <View style={styles.cardTopup}>
                <View style={styles.profileBtn}>
                    <Ionicons name="cash" size={25} color={'black'} />
                    <Text style={styles.cardTitle}>{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
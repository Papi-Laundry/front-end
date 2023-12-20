import axios from "axios";
import { useContext } from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { LoginContext } from "../context/LoginContext";

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
            <View style={{
                borderWidth: 1
            }}>
                <Image
                    source={{
                        uri: "https://static.vecteezy.com/system/resources/previews/015/275/963/original/dollar-money-bag-free-png.png"
                    }}
                    style={{
                        width: 100,
                        height: 100
                    }}
                />
                <Text>{price}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
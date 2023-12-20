import { ScrollView, Text, View } from "react-native";
import { styles } from '../styles/style';
import { NotificationCard } from "../components/NotificationCard";
import axios from 'axios'

import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import { useIsFocused } from '@react-navigation/native';

export default function NotificationScreen({ navigation }) {

    const isFocused = useIsFocused()

  const { getToken } = useContext(LoginContext)

    const [orders, setOrders] = useState([])
    const fetchOrder = async () => {
        try {
            const token = await getToken()
            const response = await axios({
                url: `${process.env.EXPO_PUBLIC_SERVER_URL}/orders/notifications`,
                headers: {
                    "Authorization": "Bearer " + token
                }
            })

            setOrders(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchOrder()
    }, [isFocused])
    return (
        <ScrollView style={styles.bgContainerNotif}>
            {orders.map(order => {
              return <NotificationCard order={order} key={order.id}/>  
            })}
        </ScrollView>
    )
}

import { Text, View, Modal, TouchableOpacity } from "react-native";
import { styles } from "../../styles/style";
import { AirbnbRating, Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { OrderCard } from "../../components/OrderCard";
import React, { useState, useContext, useEffect } from "react";
import { Button } from "../../components/Button";
import axios from 'axios'
import { LoginContext } from "../../context/LoginContext";
import { ScrollView } from "react-native";

export default function MyOrderScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const { getToken } = useContext(LoginContext)
    const [rating, setRating] = useState(null)
    const [rateId, setRateId] = useState(null)

    const [orders, setOrders] = useState([])
    const fetchOrder = async () => {
        try {
            const token = await getToken()
            const response = await axios({
                url: `${process.env.EXPO_PUBLIC_SERVER_URL}/orders/my`,
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
    }, [])

    const handleFinished = async () => {
        try {
            const token = await getToken()
            await axios({
                method: 'PUT',
                baseURL: `${process.env.EXPO_PUBLIC_SERVER_URL}/orders/${rateId}`,
                data: {
                    rating,
                    status: "Finished"
                },
                headers: {
                    "Authorization": "Bearer " + token
                }
            })

            setRating(null)
            setRateId(null)
            fetchOrder()
        } catch (error) {
            console.log(error)
        }
    }
    const handleRatePress = (id) => {
        setRateId(id)
        setModalVisible(true);
    };

    return (
        <>
            <Header
                backgroundColor="white"
                placement="center"
                leftComponent={
                    <Ionicons
                        name="chevron-back"
                        size={24}
                        color="black"
                        onPress={() => navigation.goBack()}
                    />
                }
                centerComponent={{ text: 'My Order', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <View style={styles.bgContainer}>
                <ScrollView style={{ padding: 15 }}>
                    {orders.map(order => {
                        return (
                            <OrderCard order={order} onRatePress={handleRatePress} key={order.id}/>
                        )
                    })}
                </ScrollView>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Rate Service!</Text>
                        <AirbnbRating
                            count={5}
                            reviews={["1", "2", "3", "4", "5"]}
                            defaultRating={0}
                            size={20}
                            onFinishRating={(number) => {
                                setRating(number)
                            }}
                        />
                        <Button onPress={() => {
                            handleFinished()
                            setModalVisible(false)
                        }}>Rate</Button>
                    </View>
                </View>
            </Modal>
        </>

    )
}
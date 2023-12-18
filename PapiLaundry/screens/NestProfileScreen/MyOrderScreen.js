import { Text, View, Modal, TouchableOpacity } from "react-native";
import { styles } from "../../styles/style";
import { AirbnbRating, Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { OrderCard } from "../../components/OrderCard";
import React, { useState } from "react";
import { Button } from "../../components/Button";

export default function MyOrderScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const product = {
        id: 1,
        title: 'Extra Shoes Cleaning',
        price: 50000,
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsZWFufGVufDB8fDB8fHww',
        rating: 4,
    };

    const handleRatePress = () => {
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
                <View style={{ padding: 15 }}>
                    <OrderCard product={product} onRatePress={handleRatePress} />
                </View>
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
                            defaultRating={5}
                            size={20}
                        />
                        <Button onPress={() => setModalVisible(false)}>Close</Button>
                    </View>
                </View>
            </Modal>
        </>

    )
}
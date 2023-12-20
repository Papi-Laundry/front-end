import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Button, Modal, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/style";
import { Card, Input } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list'
import Maps from '../../components/Maps';
import { toIDR } from '../../helpers/converter';
import { TextInput } from 'react-native';
import { Alert } from 'react-native';
import axios from 'axios'
import { UserContext } from '../../context/UserContext';

import BASE_URL from "../../constant/constant";
import { LoginContext } from '../../context/LoginContext';

export function CheckoutScreen({ navigation, route }) {
    const { isCheckout } = route.params
    const { getToken } = useContext(LoginContext)
    const [location, setLocation] = useState('')
    const [notes, setNotes] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = React.useState(null);
    const [coordinates, setCoordinates] = useState(null)
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const data = [
        { key: 30000, value: 'Delivery - Rp. 30.000' },
        { key: 0, value: 'Self Pickup - Free' },
    ]

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const getSubtotalItem = () => {
        let total = 0
        isCheckout.forEach(checkout => {
            total += (checkout.price * checkout.total)
        });

        return total
    }

    const handleCheckout = async () => {
        try {
            setLoading(true)
            if(getSubtotalItem() + selected > user.balance) {
                Alert.alert('Sorry', 'Your balance is not enough', {
                    text: 'OK'
                })
                return
            }
            if(location.trim() === '' || !coordinates || (selected !== 0 && selected !== 30000)) {
                Alert.alert('Error', 'Please fill in the blank', {
                    text: 'OK'
                })
                return
            }
            const token = await getToken()

            for(const checkout of isCheckout) {
                try {
                    await startCheckout(checkout, token)
                } catch (error) { 
                    Alert.alert('Error', error.response.data.message, {
                        text: "OK"
                    })
                }
            }

            await axios({
                url: `${BASE_URL}/orders/`,
                method: 'PATCH',
                headers: {
                    "Authorization": "Bearer " + token
                },
                data: {
                    pay: selected
                }
            })

            navigation.navigate("Home")
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const startCheckout = async (checkout, token) => {
        try {
            await axios({
                url: `${BASE_URL}/orders/${checkout.id}`,
                data: {
                    totalUnit: checkout.total,
                    notes,
                    method: selected === 0 ? "Self Pickup" : "Delivery",
                    destination: location,
                    coordinates: JSON.stringify(coordinates)
                },
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
        } catch (error) {
            throw error
        }
    }

    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={30} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details Order</Text>
                <View style={{ width: 25 }}></View>
            </View>
            <ScrollView>
                <View style={styles.containerAddress}>
                    <Card>
                        <Card.Title style={styles.cardTitleAddress}>Delivery Point</Card.Title>
                        <Card.Divider />
                        <Maps />
                        <Text style={styles.textAddress}>{location}</Text>
                        <TouchableOpacity style={styles.editBtn} onPress={showModal}>
                            <Text style={styles.editBtnText} >Choose Delivery Point</Text>
                        </TouchableOpacity>
                    </Card>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={hideModal}
                        presentationStyle='overFullScreen'
                    >
                        <View style={styles.modalContent}></View>
                        <ScrollView contentContainerStyle={{ flexGrow: 0, justifyContent: 'center', marginTop: 70 }} style={styles.containerScrollView}>
                            <Text style={styles.modalTitle}>Edit Address</Text>
                                <View style={styles.mapsCheckout}>
                                    <Maps userPoint={{
                                        setCoordinates
                                    }}/>
                                </View>
                            <View style={styles.modalTextSavedAddress}>
                                <View style={{
                                    backgroundColor: "white",
                                    padding: 10
                                }}>
                                    <TextInput placeholder='Detail location' value={location} onChangeText={(text) => {
                                        setLocation(text)
                                    }}/>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    if(!location) {
                                    Alert.alert('Error', 'Please input detail location', {
                                        text: "OK"
                                    }) } else {
                                        hideModal()
                                    }
                                }}>
                                    <Text style={styles.editBtn}>Choose</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </Modal>
                </View>

                {isCheckout.map(checkout => {
                return <View style={styles.cardContainerCheckout} onPress={() => navigation.navigate("LaundryScreen")} key={checkout.id}>
                    <Image style={styles.imageCheckout} source={{ uri: checkout.image }} />
                    <View style={styles.details}>
                        <Text style={styles.title}>{checkout.name}</Text>
                        <Text style={styles.subtitle}>{checkout.category.name}</Text>
                        <Text>{checkout.total} Unit Product</Text>
                        <View style={styles.meters}>
                            <Ionicons name="pricetag" />
                            <Text>{toIDR(checkout.price * checkout.total)}</Text>
                        </View>
                    </View>
                </View>
                })}

                <TouchableOpacity style={styles.cardContainerCheckout} onPress={() => {
                    Alert.alert('No Vouchers', 'You dont have vouchers yet. Please wait and we will give you in future :)', {
                        text: 'OK'
                    })
                }}>
                    <View style={styles.containerVoucher}>
                        <Ionicons name="pricetags" size={20} color="black" />
                        <Text style={styles.modalText2}>
                            Use Vouchers
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.cardContainerNotes}>
                    <Input
                        placeholder='Notes...'
                        value={notes}
                        onChangeText={(text) => {
                            setNotes(text)
                        }}
                    >
                    </Input>
                </View>

                <View style={styles.selectCheckout}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="key"
                        placeholder='Select delivery method here...'
                        boxStyles={{ borderRadius: 0, borderColor: 'white' }}
                    />
                </View>

                <TouchableOpacity style={styles.containerPaymentDetail}>

                    <View>
                        <Text style={{ fontWeight: 600, paddingBottom: 10 }}>Payment Detail</Text>
                        <View style={styles.containerPriceTotal}>
                            <View style={styles.containerTotalPaymentLeft}>
                                <Text style={styles.subtotalText}>
                                    Subtotal Item
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.subtotalPriceText}>
                                    {toIDR(getSubtotalItem())}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.containerPriceTotal}>
                            <View style={styles.containerTotalPaymentLeft}>
                                <Text style={styles.subtotalText}>
                                    Subtotal Delivery
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.subtotalPriceText}>
                                    {toIDR(selected)}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.containerPriceTotal}>
                            <View style={styles.containerTotalPaymentLeft}>
                                <Text style={styles.subtotalText}>
                                    Subtotal Discount
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.subtotalPriceText}>
                                    RP. 0
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerPriceTotal}>
                        <View style={styles.containerTotalPaymentLeft}>
                            <Ionicons name="card" size={20} color="black" />
                            <Text style={styles.modalText2}>
                                Total Payment
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.totalPriceText}>
                               {toIDR(getSubtotalItem() + selected)}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.containerCheckout}>
                    {loading ? <TouchableOpacity style={{
                        ...styles.buttonCheckout,
                        backgroundColor: 'grey',
                    }}>
                        <Text style={{...styles.buttonTextChekout, color: 'white'}}>Checkout</Text>
                    </TouchableOpacity> : 
                    <TouchableOpacity style={styles.buttonCheckout} onPress={handleCheckout}>
                        <Text style={styles.buttonTextChekout}>Checkout</Text>
                    </TouchableOpacity> 
                    }
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Modal, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/style";
import { Card, Input } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list'
import Maps from '../../components/Maps';

export function CheckoutScreen({ navigation, route }) {
    const { isCheckout } = route.params
    console.log(isCheckout)
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = React.useState("");
    const data = [
        { key: '1', value: 'Delivery - Rp. 30.000' },
        { key: '2', value: 'Self Pickup - Free' },
    ]

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

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
                        {/* <Text style={styles.textAddress}>Chairul (+62) 812-9274-9915</Text>
                        <Text style={styles.textAddress}>Kost Al Hidayah, Jalan Masjid Alhidayah No.5,</Text>
                        <Text style={styles.textAddress}>Pejaten Barat, Pasar Minggu, PASAR MINGGU, KOTA</Text>
                        <Text style={styles.textAddress}>JAKARTA SELATAN, DKI JAKARTA</Text>
                        <Text style={styles.textAddress}>Tambahkan instruksi khusus</Text>
                        <Text style={styles.textAddress}>Estimasi Waktu Pengiriman: 22 menit (1.8km)</Text> */}
                        <TouchableOpacity style={styles.editBtn} onPress={showModal}>
                            <Text style={styles.editBtnText} >Show more</Text>
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
                            <TouchableOpacity style={styles.imageLaundryContainerAdress}>
                            <Maps />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.modalTextContainer}>
                                    <Text style={styles.modalText}>
                                        Chairul ( +62 ) 812-9274-9915 Kost Al Hidayah , Jalan Masjid Alhidayah No.5 , Pejaten Barat , Pasar Minggu , PASAR MINGGU , KOTA JAKARTA SELATAN , DKI JAKARTA Tambahkan instruksi khusus Estimasi Waktu Pengiriman : 22 menit ( 1.8km )
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.modalTextContainer2}>
                                    <Ionicons name="navigate-circle-outline" size={20} color="black" />
                                    <Text style={styles.modalText2}>
                                        Use Current Address
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.modalTextContainer2}>
                                    <Ionicons name="add-circle-outline" size={20} color="black" />
                                    <Text style={styles.modalText2}>
                                        Add New Address
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.modalTitleSecondary}>Saved Address</Text>
                            <View style={styles.modalTextSavedAddress}>
                                <View style={styles.titleMainAddress}>
                                    <Ionicons name="location" size={15} />
                                    <Text>Main Address</Text>
                                </View>
                                <Text>
                                    Chairul ( +62 ) 812-9274-9915 Kost Al Hidayah , Jalan Masjid Alhidayah No.5 , Pejaten Barat , Pasar Minggu , PASAR MINGGU , KOTA JAKARTA SELATAN , DKI JAKARTA Tambahkan instruksi khusus Estimasi Waktu Pengiriman : 22 menit ( 1.8km )
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.editBtn}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                            <Button title="Close" onPress={hideModal} />
                        </ScrollView>
                    </Modal>
                </View>

                <View style={styles.cardContainerCheckout} onPress={() => navigation.navigate("LaundryScreen")}>
                    <Image style={styles.imageCheckout} source={{ uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                    <View style={styles.details}>
                        <Text style={styles.title}>Shoes Cleaning</Text>
                        <Text style={styles.subtitle}>Instant</Text>
                        <Text>1 Pair</Text>
                        <View style={styles.meters}>
                            <Ionicons name="pricetag" />
                            <Text>RP. 100.000</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.cardContainerCheckout}>
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
                    >
                    </Input>
                </View>

                <View style={styles.selectCheckout}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        onSelect={() => alert(selected)}
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
                                    RP. 100.000
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
                                    RP. 30.000
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
                                RP. 130.000
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.containerCheckout}>
                <TouchableOpacity style={styles.buttonCheckout} >
                    <Text style={styles.buttonTextChekout}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

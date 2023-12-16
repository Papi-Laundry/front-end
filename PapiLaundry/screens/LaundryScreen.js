import { View, ScrollView, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ServicesTab } from "./NestLaundryScreen/ServicesTab";
import { RatingsTab } from "./NestLaundryScreen/RatingsTab";
import { AirbnbRating } from "react-native-elements";
import { styles } from "../styles/style";
import { useRef, useState } from "react";
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default function LaundryScreen({ navigation }) {
    const scrollViewRef = useRef();
    const [showScrollUp, setShowScrollUp] = useState(false);

    const handleScrollToBottom = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };
    const handleScrollToTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: true });
        }
    };
    const handleScroll = (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const topOffset = 200; // Ubah sesuai dengan tinggi konten yang diinginkan

        setShowScrollUp(currentOffset > topOffset);
    };
    return (
        <View style={{ flex: 1 }}>

            <ScrollView
                style={styles.scrollLundryContainer}
                ref={scrollViewRef}
                onScroll={handleScroll}
                scrollEventThrottle={16}>
                <View>

                    <Image
                        style={styles.imageLaundry}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }}
                    />
                </View>


                <View style={styles.containerLaundryName}>
                    <Text style={styles.textLaundryName}>Total Clean Laundry</Text>
                    {/* Tombol scroll ke bawah */}
                    <TouchableOpacity
                        style={styles.floatingButtonDown}
                        onPress={handleScrollToBottom}
                    >
                        <Ionicons name="ios-arrow-down" size={20} color="#fff" />
                    </TouchableOpacity>

                    {/* Tombol scroll ke atas (menampilkan setelah scroll ke bawah) */}
                    <TouchableOpacity
                        style={[styles.floatingButtonDown, { display: showScrollUp ? 'flex' : 'none' }]}
                        onPress={handleScrollToTop}
                    >
                        <Ionicons name="ios-arrow-up" size={20} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.secondTextLaundryName}>Clothes | Shoes | Carpet</Text>
                    <View style={styles.starsContainer}>
                        <AirbnbRating
                            count={5}
                            defaultRating={3}
                            size={15}
                            showRating={false}
                        />
                        <Text style={styles.ratingText}>4.9 (100 Reviews)</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.imageLaundryContainer}>
                    <Image
                        style={styles.imageMaps}
                        source={{
                            uri: 'https://cms.disway.id/uploads/07ef090cc67e1be0ce0441e685aac4d4.png'
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.metersLaundry}>
                    <Ionicons name="location-outline" size={20} style={styles.pinIcon} />
                    <Text style={styles.addressText}>
                        Pejaten village mall, LG floor #19A, RT.1/RW.5, Jati Padang, Ps. Minggu,
                        Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12540
                    </Text>
                </View>
                <View>
                    <Text>

                    </Text>
                </View>

            </ScrollView>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#074295',
                    inactiveTintColor: 'gray',
                    labelStyle: { fontSize: 14 },
                    style: { backgroundColor: 'white' },
                    indicatorStyle: { backgroundColor: '#074295' },
                }}>
                <Tab.Screen name="Services" children={(() => <ServicesTab navigation={navigation} />)} />
                <Tab.Screen name="Ratings" component={RatingsTab} />
            </Tab.Navigator>
        </View>
    )
}

import * as React from 'react';
import { ScrollView, Text, View, Dimensions } from "react-native";
// import Carousel from 'react-native-reanimated-carousel'; // Pastikan pustaka telah terpasang
import { styles } from '../styles/style';
import { Searchbar } from 'react-native-paper';
// import { Searchbar } from 'react-native-paper';

const images = [
    // require('../../assets/image1.jpg'), // Gambar lokal di dalam proyek Anda
    { uri: 'https://images.unsplash.com/photo-1702559558083-b2e3193ddc07?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, // Contoh URL gambar eksternal
];

export default function HomeScreen({ navigation }) {
    // const width = Dimensions.get('window').width;
    return (
        <View style={styles.bgContainer}>
            <ScrollView>
                {/* <Searchbar/> */}
            </ScrollView>
        </View>
    )
}

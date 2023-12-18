import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from '../styles/style';
import FloatingButton from '../components/FloatingButton';
import { Ionicons } from '@expo/vector-icons';

const chatList = [
    {
        id: 1,
        sender: 'LuckyHouse',
        message: 'Super Best Sell Barang',
        image: 'https://images.unsplash.com/photo-1699434301274-101d0c5f1807?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        date: '2023-12-16T08:30:00Z',
    },
    {
        id: 2,
        sender: 'Mandiri Mall',
        message: 'Terima Kasih Telah Berbelanja',
        image: 'https://images.unsplash.com/photo-1699434301274-101d0c5f1807?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        date: '2023-12-15T18:45:00Z',
    },
    {
        id: 3,
        sender: 'Yi Tai Official Shop',
        message: 'Selamat Datang Di Yi Tai Official Shop',
        image: 'https://images.unsplash.com/photo-1699434301274-101d0c5f1807?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        date: '2023-12-14T12:00:00Z',
    },
    {
        id: 4,
        sender: 'TechHub Store',
        message: 'New Gadgets Available Now!',
        image: 'https://images.unsplash.com/photo-1699434301274-101d0c5f1807?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        date: '2023-12-13T09:20:00Z',
    },
    {
        id: 5,
        sender: 'FashionX',
        message: 'Check Out Our Latest Fashion Collection!',
        image: 'https://images.unsplash.com/photo-1699434301274-101d0c5f1807?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        date: '2023-12-12T15:10:00Z',
    },
    {
        id: 6,
        sender: 'FoodiesCorner',
        message: 'Discover Delicious New Recipes!',
        image: 'https://images.unsplash.com/photo-1699434301274-101d0c5f1807?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
        date: '2023-12-11T20:00:00Z',
    },
];


const ChatCard = ({ item, navigation }) => {
    const formattedDate = new Date(item.date).toLocaleDateString('en-GB'); // Mengubah format tanggal

    return (
        <TouchableOpacity style={styles.chatCard}>
            <Image source={{ uri: item.image }} style={styles.imageChat} />
            <View style={styles.cardContent}>
                <View style={styles.senderContainer}>
                    <Text style={styles.sender}>{item.sender}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
                <Text style={styles.message}>{item.message}</Text>
            </View>
        </TouchableOpacity>
    );
};

const ChatList = ({navigation}) => {
    const renderItem = ({ item }) => <ChatCard item={item} />;

    return (
        <>
            <FlatList
                data={chatList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <FloatingButton
                onPress={() => navigation.navigate("MessageScreen")}
                buttonStyle={{ backgroundColor: '#074295' }}
                textStyle={{ fontSize: 15, alignItems: 'center' }}
                text={<Ionicons name="add" size={30} color={'white'} />}
            />
        </>
    );
};

export default ChatList;
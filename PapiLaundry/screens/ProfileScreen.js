import { styles } from '../styles/style';
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../context/UserContext';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import BASE_URL from '../constant/constant';

export default function ProfileScreen({ navigation }) {
    const { user, setUser } = useContext(UserContext)
    const { logoutAction } = useContext(LoginContext)
    const { addAction } = useContext(LoginContext)
    const [image, setImage] = useState(null);

    useEffect(() => {
        // Fetch the access token from SecureStore when the component mounts
        fetchProfile()
      }, []);
    
    const fetchProfile = async () => {
        try {
          const token = await SecureStore.getItemAsync('token');
          const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          };
      
          const response = await axios.get(`${BASE_URL}/profiles`, { headers });
          setImage(response.data.image)
        } catch (error) {
          console.error('Error submitting data:', error);
      
          // Handle the error, e.g., display an error message to the user
        } finally {
          // Reset loading state if needed
        }
      };

    return (
        <View style={styles.bgContainer}>
            <View style={styles.profileHeader}>
                <Image
                    style={styles.profileImage}
                    source={{
                        uri: image,
                    }}
                />
                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>{user.name}</Text>
                    <Text style={styles.profileHandle}>@{user.User.username}</Text>
                    <Text style={styles.profileHandle}>Joined: 20/12/2023</Text>
                </View>
            </View>

            <View style={styles.cardProfile}>
                <View style={styles.profileBtn}>
                    <Ionicons name="wallet-outline" size={25} color={'black'} />
                    <Text style={styles.cardTitle}>My Wallet</Text>
                    <Text style={styles.cardTitle2}>I</Text>
                    <Text style={styles.cardTitle}>Rp. 300.000,-</Text>
                    <Text style={styles.cardTitle2}>I</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("TopupScreen")}>
                        <Ionicons name="add-circle" size={25} color={'black'} />
                    </TouchableOpacity>


                </View>
            </View>

            <View style={styles.cardProfile}>
                <TouchableOpacity onPress={() => navigation.navigate("MyLaundryScreen")}>
                    <View style={styles.profileBtn}>
                        <Ionicons name="shirt" size={25} color={'black'} />
                        <Text style={styles.cardTitle}>My Laundry</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MyOrderScreen")}>
                    <View style={styles.profileBtn}>
                        <Ionicons name="cart" size={25} color={'black'} />
                        <Text style={styles.cardTitle}>My Orders</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
                    <View style={styles.profileBtn}>
                        <Ionicons name="settings" size={25} color={'black'} />
                        <Text style={styles.cardTitle}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.cardProfile}>
                <TouchableOpacity onPress={() => logoutAction("token")}>
                    <View style={styles.profileBtn}>
                        <Ionicons name="log-out" size={25} color={'black'} />
                        <Text style={styles.cardTitle}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
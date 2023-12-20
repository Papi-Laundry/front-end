import { styles } from '../styles/style';
import { useContext, useEffect } from "react"
import { LoginContext } from "../context/LoginContext"
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../context/UserContext';
import { toDate, toIDR } from '../helpers/converter';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function ProfileScreen({ navigation }) {
    const { user, setUser } = useContext(UserContext)
    const { logoutAction, getToken } = useContext(LoginContext)
    const isFocused = useIsFocused()

    const fetchProfiles = async () => {
        try {
          const token = await getToken()
          const response = await axios({
            url: `${process.env.EXPO_PUBLIC_SERVER_URL}/profiles`,
            method: 'GET',
            headers: {
              "Authorization": "Bearer " + token
            }
          })
          
          setUser({
            ...user,
            ...response.data
          })
        } catch (error) {
          console.log(error)
        }
      }

    useEffect(() => {
        if(isFocused) {
            fetchProfiles()
        }
    }, [isFocused])

    return (
        <View style={styles.bgContainer}>
            <View style={styles.profileHeader}>
                <Image
                    style={styles.profileImage}
                    source={{
                        uri: user.image,
                    }}
                />
                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>{user.name}</Text>
                    <Text style={styles.profileHandle}>@{user.User.username}</Text>
                    <Text style={styles.profileHandle}>Joined: {toDate(user.createdAt)}</Text>
                </View>
            </View>

            <View style={styles.cardProfile}>
                <View style={styles.profileBtn}>
                    <Ionicons name="wallet-outline" size={25} color={'black'} />
                    <Text style={styles.cardTitle}>My Wallet</Text>
                    <Text style={styles.cardTitle2}>I</Text>
                    <Text style={styles.cardTitle}>{toIDR(user.balance)}</Text>
                    <Text style={styles.cardTitle2}>I</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("TopupScreen")}>
                        <Ionicons name="add-circle" size={25} color={'black'} />
                    </TouchableOpacity>


                </View>
            </View>

            <View style={styles.cardProfile}>
                {user.User.role === "owner" && <TouchableOpacity onPress={() => navigation.navigate("MyLaundryScreen")}>
                    <View style={styles.profileBtn}>
                        <Ionicons name="shirt" size={25} color={'black'} />
                        <Text style={styles.cardTitle}>My Laundry</Text>
                    </View>
                </TouchableOpacity>}
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
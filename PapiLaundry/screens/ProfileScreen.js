import { styles } from '../styles/style';
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
    const { logoutAction } = useContext(LoginContext)
    const {addAction} = useContext(LoginContext)
    return (
        <View style={styles.bgContainer}>

            <View style={styles.profileHeader}>
                <Image
                    style={styles.profileImage}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1579783483458-83d02161294e?q=80&w=2897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                />
                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>Ikan Asin</Text>
                    <Text style={styles.profileHandle}>@Ekhan</Text>
                    <Text style={styles.profileHandle}>Joined: 20/12/2023</Text>
                </View>
            </View>

            <View style={styles.cardProfile}>
                <TouchableOpacity onPress={() => navigation.navigate("MyLaundryScreen")}>
                    <View style={styles.profileBtn}>
                        <Ionicons name="shirt" size={30} color={'black'} />
                        <Text style={styles.cardTitle}>My Laundry</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate("MyOrderScreen")}>
                    <View style={styles.profileBtn}>
                        <Ionicons name="cart" size={30} color={'black'} />
                        <Text style={styles.cardTitle}>My Orders</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate("EditProfileScreen")}>
                    <View style={styles.profileBtn}>
                        <Ionicons name="settings" size={30} color={'black'} />
                        <Text style={styles.cardTitle}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.cardProfile}>
                <TouchableOpacity onPress={() => logoutAction("token")}>
                    <View style={styles.profileBtn}>
                        <Ionicons name="log-out" size={30} color={'black'} />
                        <Text style={styles.cardTitle}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
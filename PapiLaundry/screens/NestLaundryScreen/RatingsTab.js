import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/style";
import { Ionicons } from '@expo/vector-icons';
import { AirbnbRating, Rating } from "react-native-elements";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { toDate } from "../../helpers/converter";

export function RatingsTab({ rates }) {
    
    return (
        <>
            <ScrollView style={styles.bgContainer} contentContainerStyle={{
                paddingTop: 10
            }}>
                {
                    rates.map(rate => {
                    return <View style={styles.cardContainerRating} key={rate.id}>
                        <Image style={styles.imageUserRating} source={{ uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                        <View style={styles.details}>
                            <Text style={styles.title}>{rate.UserProfile.name}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <AirbnbRating
                                    count={5}
                                    defaultRating={rate.rating}
                                    size={15}
                                    showRating={false}
                                    isDisabled
                                />
                            </View>
                            <Text style={styles.subtitle}>{toDate(rate.updatedAt)}</Text>
                        </View>
                    </View>
                    })
                }

            </ScrollView>
        </>
    )
}
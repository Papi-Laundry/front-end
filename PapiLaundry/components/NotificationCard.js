import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';

export const NotificationCard = ({order }) => {
  return (
    <View style={styles.cardNotification}>
      <Image style={styles.imageNotification} source={{ uri: order.Product.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{order.Product.name}</Text>
        <Text style={styles.statusDelivery}>Total Order : {order.totalUnit}</Text>
        <View style={styles.ratingContainer}>
          <TouchableOpacity  >
            <View style={order.status === "On-Process" ? styles.star : {
              ...styles.star,
              backgroundColor: '#22668D'
            }}>
              <Text style={order.status !== "On-Process" ? { color: 'white' } : ""}>{order.status}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

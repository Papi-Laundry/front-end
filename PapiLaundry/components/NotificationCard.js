import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';

export const NotificationCard = ({product, onRatePress}) => {
  return (
    <View style={styles.cardNotification}>
      <Image style={styles.imageNotification} source={{ uri: product.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.statusDelivery}>{product.status}</Text>
        <View style={styles.ratingContainer}>
          <TouchableOpacity  onPress={onRatePress} >
            <View style={styles.star}>
              <Text>Order Completed</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

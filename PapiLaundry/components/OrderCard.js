import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';
import { toDate, toIDR } from '../helpers/converter';

export const OrderCard = ({order, onRatePress}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: order.Product.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{order.Product.name}</Text>
        <Text style={styles.price}>{toIDR(order.Product.price * order.totalUnit)}</Text>
        <View style={styles.ratingContainer}>
          {!order.rating && <TouchableOpacity  onPress={() => {
            onRatePress(order.id)}} >
            <View style={{
              ...styles.star,
              marginBottom: 2
            }}>
              <Text>Rate</Text>
            </View>
          </TouchableOpacity>}
          <Text style={styles.ratingText}>{order.rating ? `Rate : ${order.rating}` : "None"} / 5</Text>
        </View>
        <Text style={{
          marginTop: 2,
          color: 'grey'
        }}>{toDate(order.createdAt)}</Text>
      </View>
    </View>
  );
};

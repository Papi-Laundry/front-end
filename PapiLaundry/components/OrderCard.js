import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from '../styles/style';

export const OrderCard = ({title, desc, onPress}) => {
 return (
    <TouchableOpacity style={styles.orderCardContainer} onPress={onPress}>
      <Text style={styles.titleOrderCard}>{title}</Text>
      <Text style={styles.descOrderCard}>{desc}</Text>
    </TouchableOpacity>
 );
};

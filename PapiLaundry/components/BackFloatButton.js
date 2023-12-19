import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export const BackFloatButton = ({ onPress, buttonStyle, textStyle, text }) => {
  return (
    <TouchableOpacity style={[styles.floatingButton, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#45454530', // warna latar belakang dapat disesuaikan
    position: 'absolute',
    top: 50,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // shadow on Android
    shadowColor: 'black', // shadow on iOS
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


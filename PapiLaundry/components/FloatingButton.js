import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const FloatingButton = ({ onPress, buttonStyle, textStyle, text }) => {
  return (
    <TouchableOpacity style={[styles.floatingButton, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue', // warna latar belakang dapat disesuaikan
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // shadow on Android
    shadowColor: 'black', // shadow on iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FloatingButton;

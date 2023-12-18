import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AbsoluteButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Absolute Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'blue',
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default AbsoluteButton;

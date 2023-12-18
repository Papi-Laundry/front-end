import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SearchBarFloating = ({ placeholder, onChangeText, value }) => {
    const clearText = () => {
        onChangeText(''); // Mengatur teks menjadi kosong saat tombol 'clear' ditekan
    };
    return (
        <View style={styles.container}>
      <Ionicons name="search" size={24} color="#888" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
      {value ? (
        <TouchableOpacity onPress={clearText} style={styles.clearButton}>
          <Ionicons name="close" size={24} color="#888" />
        </TouchableOpacity>
      ) : null}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 70,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        paddingHorizontal: 10,
        zIndex: 50,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { height: 2, width: 2 },
        marginHorizontal: 30
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 15,
        fontSize: 16,
    },
});


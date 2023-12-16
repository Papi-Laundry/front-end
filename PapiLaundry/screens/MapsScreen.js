import React from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // Mengimpor PROVIDER_GOOGLE untuk menggunakan Google Maps
import { styles } from '../styles/style';

export default function MapsScreen({ navigation }) {
  return (
    <View style={styles.bgContainer}>
      <MapView
        // style={styles.map} // Menambahkan gaya dari styles untuk menentukan tata letak peta
        provider={PROVIDER_GOOGLE} // Menentukan penyedia peta
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

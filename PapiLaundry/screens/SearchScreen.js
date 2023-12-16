import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
// import { HeaderBackButton } from '@react-navigation/stack';

export default function SearchScreen({ navigation }) {
 const updateSearch = (text) => {
 };

 return (
    <>
      <SafeAreaView>
        <View>
          {/* <HeaderBackButton
            onPress={() => navigation.goBack()}
            tintColor="#000" // Warna teks tetap #000000
          /> */}
          <SearchBar
            inputContainerStyle={{ borderRadius: 30, backgroundColor: '#f7f7f7' }}
            platform="ios"
            placeholder="Search Laundry Here..."
            onChangeText={updateSearch}
            round={true}
          />
        </View>
      </SafeAreaView>
    </>
 );
}
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');

  const updateSearch = (text) => {
    setSearchText(text);
  };

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <SearchBar
          inputContainerStyle={{
            borderRadius: 30,
            backgroundColor: '#f7f7f7',
            flex: 1,
            marginLeft: 10,
            marginRight: searchText ? 55 : 0,
          }}
          containerStyle={{ flex: 1 }}
          platform="ios"
          placeholder="Search Laundry Here..."
          onChangeText={updateSearch}
          value={searchText}
          round={true}
          showCancel={false}
          onCancel={() => setSearchText('')}
          cancelButtonProps={{ buttonTextStyle: { color: 'black', paddingRight: 10 } }} // Style for cancel button
        />
      </View>
    </SafeAreaView>
  );
}

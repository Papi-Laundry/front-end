import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";
import { Cards } from '../components/Cards';

export default function SearchScreen({ navigation, route }) {
  const { categoryId } = route.params
  const [searchText, setSearchText] = useState('');
  const [laundriesData, setLaundriesData] = useState([])

  const fetchLaundries = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/laundries?search=${searchText}&categoryId=${categoryId ? categoryId : ""}`);
      
      setLaundriesData(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  const updateSearch = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    fetchLaundries()
  }, [searchText])

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 20 }}>
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
      {laundriesData.map((search) => (
          <Cards
            onPress={() => navigation.navigate("LaundryScreen", { laundry: search.laundry })}
            key={search.id}
            laundry={search.laundry}
          />
        ))}
    </SafeAreaView>
  );
}

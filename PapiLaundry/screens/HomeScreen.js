import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View, } from "react-native";
import { styles } from '../styles/style';
import { Categories } from '../components/Categories';
import { Searchbar } from '../components/Searchbar';
import { CarouselImage } from '../components/Carousel';
import { Cards } from '../components/Cards';
import { CardTitle } from '../components/CardTitle';
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';
import { UserContext } from '../context/UserContext';
import * as Location from 'expo-location'

export default function HomeScreen({ navigation }) {
  const { getToken } = useContext(LoginContext)
  const { user, setUser } = useContext(UserContext)

  // const width = Dimensions.get('window').width;
  const [laundriesData, setLaundriesData] = useState([]);

  const fetchLaundries = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/laundries?latitude=${user.location.latitude}&longitude=${user.location.longitude}`);
      setLaundriesData(response.data);
    } catch (error) {
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("Response headers:", error.response.headers);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error setting up the request:", error.message);
      }
      console.log("Error config:", error.config);
    }
  };
  

  const fetchProfiles = async () => {
    try {
      const token = await getToken()
      const response = await axios({
        url: `${process.env.EXPO_PUBLIC_SERVER_URL}/profiles`,
        method: 'GET',
        headers: {
          "Authorization": "Bearer " + token
        }
      })
      
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if(status !== 'granted') {
      setUser({
        ...user,
        error: "Permission Denied"
      })
      return
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.LocationAccuracy.Highest
    })
  
    setUser({
      ...user,
      // latitude: location.coords.latitude,
      // longitude: location.coords.longitude
      location: {
        latitude: -6.260457,
        longitude: 106.781739
      }
    })
  }

  useEffect(() => {
    fetchProfiles();
  }, []);

  useEffect(() => {
    if(user) {
      if(!user.location) {
        getUserLocation();
      }
    }
    if(user?.location?.latitude && user.location?.longitude) {
      fetchLaundries();
    }
  }, [user])


  return (
    <View style={styles.bgContainer}>
      <ScrollView>
        <Searchbar navigation={navigation}/>
        <Categories />
        <CarouselImage />
        <CardTitle/>
        {laundriesData.map((laundry) => (
          <Cards
            onPress={() => navigation.navigate("LaundryScreen", { laundry })}
            key={laundry.id}
            laundry={laundry}
          />
        ))}
      </ScrollView>
    </View>
  )
}

import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Dimensions } from "react-native";
import { styles } from '../styles/style';
import { Categories } from '../components/Categories';
import { Searchbar } from '../components/Searchbar';
import { CarouselImage } from '../components/Carousel';
import { Cards } from '../components/Cards';
import { CardTitle } from '../components/CardTitle';
import axios from 'axios';
import BASE_URL from '../env/env';
import { getUserLocation } from '../helpers/location';

export default function HomeScreen({ navigation }) {
    // const width = Dimensions.get('window').width;
    const [laundries, setLaundries] = useState([]);
    const [locationUser, setLocationUser] = useState(null)

    const fetchLaundries = async () => {
      try {
        const userLocation = await getUserLocation()

        const response = await axios.get(`${BASE_URL}/laundries?longitude=${userLocation.longitude}&latitude=${userLocation.latitude}`);

        setLocationUser(userLocation)
        setLaundries(response.data);
      } catch (error) {
        console.log(error)
      }
    };

    useEffect(() => {
      fetchLaundries();
    }, []);

    return (
        <View style={styles.bgContainer}>
            <ScrollView>
                <Searchbar navigation={navigation}/>
                <Categories />
                <CarouselImage />
                <CardTitle/>
                {locationUser && laundries.map((laundry) => (
                  <Cards
                      onPress={() => navigation.navigate("LaundryScreen", {
                        laundry
                      })}
                      key={laundry.id}
                      laundry={laundry}
                      locationUser={locationUser}
                  />
                ))}
            </ScrollView>
        </View>
    )
}

import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Dimensions } from "react-native";
import { styles } from '../styles/style';
import { Categories } from '../components/Categories';
import { Searchbar } from '../components/Searchbar';
import { CarouselImage } from '../components/Carousel';
import { Cards } from '../components/Cards';
import { CardTitle } from '../components/CardTitle';
import axios from 'axios';
import { Card } from 'react-native-paper';

export default function HomeScreen({ navigation }) {

    // const width = Dimensions.get('window').width;
    const [cardData, setCardData] = useState([]);

    // Fetch card data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://papi-laundry-server.nokatotedo.my.id/laundries');
        // Assuming the API response contains an array of card data
        setCardData(response.data);
      } catch (error) {
        console.error('Error fetching card data:', error.message);
      }
    };
    useEffect(() => {
      fetchData();
    }, []); // The empty dependency array ensures this effect runs once when the component mounts
    // console.log(cardData);
    return (
        <View style={styles.bgContainer}>
            <ScrollView>
                <Searchbar navigation={navigation}/>
                <Categories />
                <CarouselImage />
                <CardTitle/>
                {cardData.map((card) => (
                <Cards
                    onPress={() => navigation.navigate("LaundryScreen")}
                    key={card.id}
                    name={card.name}
                    subtitle={card.subtitle}
                    image={card.image}
                    distance={card.distance}  // Contoh, jika data jarak tersedia di objek card
                />
                ))}
                {/* <Cards onPress={() => navigation.navigate("LaundryScreen")}/> */}
                {/* <Cards onPress={() => navigation.navigate("LaundryScreen")}/> */}
            </ScrollView>
        </View>
    )
}

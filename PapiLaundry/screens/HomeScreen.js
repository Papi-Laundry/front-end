import * as React from 'react';
import { ScrollView, View } from "react-native";
import { styles } from '../styles/style';
import { Categories } from '../components/Categories';
import { Searchbar } from '../components/Searchbar';
import { CarouselImage } from '../components/Carousel';
import { Cards } from '../components/Cards';
import { CardTitle } from '../components/CardTitle';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.bgContainer}>
            <ScrollView>
                <Searchbar navigation={navigation}/>
                <Categories />
                <CarouselImage />
                <CardTitle/>
                <Cards onPress={() => navigation.navigate("LaundryScreen")}/>
                <Cards onPress={() => navigation.navigate("LaundryScreen")}/>
            </ScrollView>
        </View>
    )
}

import * as React from 'react';
import { ScrollView, Text, View, Dimensions } from "react-native";
import { styles } from '../styles/style';
import { SearchBarIOS } from '@rneui/base/dist/SearchBar/SearchBar-ios';
import { Categories } from '../components/Categories';
import { Searchbar } from '../components/Searchbar';
import { CarouselImage } from '../components/Carousel';
import { Cards } from '../components/Cards';

export default function HomeScreen({ navigation }) {
    // const width = Dimensions.get('window').width;
    return (
        <View style={styles.bgContainer}>
            <ScrollView>
                <Searchbar />
                <Categories />
                <CarouselImage />
                <Cards />
                <Cards />
            </ScrollView>
        </View>
    )
}

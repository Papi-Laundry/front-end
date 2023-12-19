import { View, ScrollView, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ServicesTab } from "./NestLaundryScreen/ServicesTab";
import { RatingsTab } from "./NestLaundryScreen/RatingsTab";
import { AirbnbRating } from "react-native-elements";
import { styles } from "../styles/style";
import { useRef, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import Maps from "../components/Maps";

const Tab = createMaterialTopTabNavigator();

export default function LaundryScreen({ navigation, route }) {
  const { laundry } = route.params
  

  const scrollViewRef = useRef();
  const [showScrollUp, setShowScrollUp] = useState(false);

  const handleScrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };
  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const topOffset = 200;

    setShowScrollUp(currentOffset > topOffset);
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollLundryContainer}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View>
          <Image
            style={styles.imageLaundry}
            source={{
              uri: laundry.image
            }}
          />
        </View>

        <View style={styles.containerLaundryName}>
          <Text style={styles.textLaundryName}>{laundry.name}</Text>
          {/* Tombol scroll ke bawah */}
          <TouchableOpacity
            style={styles.floatingButtonDown}
            onPress={handleScrollToBottom}
          >
            <Ionicons name="ios-arrow-down" size={20} color="#fff" />
          </TouchableOpacity>

          {/* Tombol scroll ke atas (menampilkan setelah scroll ke bawah) */}
          <TouchableOpacity
            style={[styles.floatingButtonDown, { display: showScrollUp ? 'flex' : 'none' }]}
            onPress={handleScrollToTop}
          >
            <Ionicons name="ios-arrow-up" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.secondTextLaundryName}>Clothes | Shoes | Carpet</Text>
          <View style={styles.starsContainer}>
            <AirbnbRating
              count={5}
              defaultRating={3}
              size={15}
              showRating={false}
            />
            <Text style={styles.ratingText}>4.9 (100 Reviews)</Text>
          </View>
        </View>

        <View style={{
          ...styles.imageLaundryContainer,
          height: 200
          }}>
          <Maps laundryPoint={laundry.locationPoint}/>
        </View>
        <View style={styles.metersLaundry}>
          <Ionicons name="location-outline" size={20} style={styles.pinIcon} />
          <Text style={styles.addressText}>
            {laundry.location}
          </Text>
        </View>
        <View><Text /></View>
      </ScrollView>
      <Tab.Navigator
        screenOptions={{
          activeTintColor: '#074295',
          inactiveTintColor: 'gray',
          labelStyle: { fontSize: 14 },
          style: { backgroundColor: 'white' },
          indicatorStyle: { backgroundColor: '#074295' },
        }}>
        <Tab.Screen name="Services" children={(() => <ServicesTab navigation={navigation} laundryId={laundry.id}/>)} />
        <Tab.Screen name="Ratings" component={RatingsTab} />
      </Tab.Navigator>
    </View>
  )
}

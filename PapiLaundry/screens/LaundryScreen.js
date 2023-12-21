import { View, ScrollView, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ServicesTab } from "./NestLaundryScreen/ServicesTab";
import { RatingsTab } from "./NestLaundryScreen/RatingsTab";
import { AirbnbRating } from "react-native-elements";
import { styles } from "../styles/style";
import { useRef, useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import Maps from "../components/Maps";
import { BackFloatButton } from "../components/BackFloatButton";
import axios from 'axios'
const Tab = createMaterialTopTabNavigator();

export default function LaundryScreen({ navigation, route }) {
  const [laundryOwner, setLaundryOwner] = useState()
  const { laundry } = route.params

  console.log(laundry);
  useEffect(() => {
    // Fetch the access token from SecureStore when the component mounts
    setLaundryOwner({name: laundry.name, image: laundry.owner.image, userId:laundry.owner.userId})
  }, []);


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

  const [rates, setRates] = useState([])
    const fetchRating = async () => {
        try {
            const response = await axios({
                url: `${process.env.EXPO_PUBLIC_SERVER_URL}/orders/${laundry.id}`
            })

            const withRating = response.data.filter(rate => {
                return rate.rating !== null
            })

            setRates(withRating)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchRating()
    }, [])

  const getAverageRate = () => {
    let total = 0
    rates.forEach(rate => {
      total += rate.rating
    })
    if(total === 0) return total
    return (total/rates.length).toFixed(2)
  }

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
          <Text style={styles.secondTextLaundryName}>By {laundry.owner.name}</Text>
          <View style={styles.starsContainer}>
            <AirbnbRating
              count={5}
              defaultRating={getAverageRate()}
              size={15}
              showRating={false}
            />
            <Text style={styles.ratingText}>{getAverageRate()} ({rates.length} Reviews)</Text>
          </View>
        </View>

        <View style={{
          ...styles.imageLaundryContainer,
          height: 200
          }}>
          <Maps laundryPoint={laundry}/>
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
<<<<<<< HEAD
        <Tab.Screen name="Services" children={(() => <ServicesTab navigation={navigation} laundryId={laundry.id} laundry={laundry}/>)} />
=======

        <Tab.Screen name="Services" children={(() => <ServicesTab navigation={navigation} laundryOwner={laundryOwner} laundryId={laundry.id}/>)} />
>>>>>>> 401c749e22ababdde2b2a437d01411770374d415
        <Tab.Screen name="Ratings" children={() => <RatingsTab rates={rates}/> } />

      </Tab.Navigator>
      <BackFloatButton
         onPress={() => navigation.goBack()}
         textStyle={{ fontSize: 15, alignItems: 'center' }}
         text={<Ionicons name="chevron-back-outline" size={30} color={'white'} />}
      />

    </View>
  )
}

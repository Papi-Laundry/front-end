import MapView, { MapCallout, Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import axios from 'axios'
import MapCard from './MapCard'
import { SwiperDrawer } from './SwiperDrawer'

export default function Maps() {
  const [errorMsg, setErrorMsg] = useState(null)
  const [locationUser, setLocationUser] = useState(null)
  const [locationLaundries, setLocationLaundries] = useState(null)

  const getLaundryLocation = async () => {
    const response = await axios({
      url: 'https://e5e2-139-228-111-126.ngrok-free.app/laundries'
    })
    
    setLocationLaundries(response.data)
  }

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if(status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.LocationAccuracy.Highest
    })
  
    setLocationUser({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    })
  }

  useEffect(() => {
    getUserLocation()
    getLaundryLocation()
  }, [])
  
  if(errorMsg) {
    return (
      <View style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Unable to access Maps (Permission denied)</Text>
      </View>
    )
  }

  if(!locationUser) {
    return (
      <View style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{
      width: '100%',
      flex: 1,
      position: 'relative'
    }}>
      <MapView 
        showsUserLocation={true} style={{
          width: '100%',
          height: '100%',
          position: 'absolute'
        }}
        initialRegion={{
          ...locationUser,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002
        }}>
        {locationLaundries && locationLaundries.map(laundry => {
          return (
            <Marker coordinate={{
              latitude: laundry.locationPoint.coordinates[0],
              longitude: laundry.locationPoint.coordinates[1]
            }} key={laundry.id}>
              <Image
                source={{
                  uri:"https://cdn-icons-png.flaticon.com/512/4666/4666163.png",
                }}
                style={{
                  aspectRatio: '1/1',
                  width: 40,
                  height: 'auto'
                }}
              />
              <MapCallout>
                <Text>Oke</Text>
              </MapCallout>
            </Marker>
          )
        })}
      </MapView>
      <View style={{
        position: 'absolute',
        height: 'auto',
        bottom: 0
      }}>
        <ScrollView horizontal={true} contentContainerStyle={{
          gap: 20
        }}>
          {locationLaundries && locationLaundries.map(laundry => {
            return (
              <MapCard key={laundry.id} laundry={laundry}/>
            )
          })}
        </ScrollView>
        <SwiperDrawer/>
      </View>
    </View>
  )
}
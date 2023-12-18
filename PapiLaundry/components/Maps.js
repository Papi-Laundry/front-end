import MapView, { MapCallout, Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import axios from 'axios'
import MapCard from './MapCard'

export default function Maps() {
  const [errorMsg, setErrorMsg] = useState(null)
  const [locationUser, setLocationUser] = useState(null)
  const [locationPin, setLocationPin] = useState(null)
  const [laundriesPin, setLaundriesPin] = useState(null)
  const [region, setRegion] = useState(null)

  const getLaundryLocation = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://c343-103-171-161-167.ngrok-free.app/laundries'
      })

      setLaundriesPin(response.data)
    } catch (error) {
      console.log(error)
    }
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
      longitude: location.coords.longitude,
      latitudeDelta: 0.002,
      longitudeDelta: 0.002
    })
  }

  const inputRegion = (latitude, longitude) => {
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.002,
      longitudeDelta: 0.002
    })
  }

  const getLocation = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate
    setLocationPin({
      latitude,
      longitude
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
        initialRegion={locationUser}
        region={region}
        onLongPress={getLocation}>
        {locationPin && <Marker
          coordinate={locationPin}
        />}
        {laundriesPin && laundriesPin.map(laundry => {
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
          {laundriesPin && laundriesPin.map(laundry => {
            return (
              <MapCard key={laundry.id} laundry={laundry} inputRegion={inputRegion}/>
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}
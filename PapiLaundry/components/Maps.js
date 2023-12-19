import MapView, { MapCallout, Marker } from 'react-native-maps'
import { useContext, useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import axios from 'axios'
import { UserContext } from '../context/UserContext';
import { FontAwesome } from '@expo/vector-icons';

export default function Maps({ laundryPoint, userPoint }) {
  const { user } = useContext(UserContext)

  const [locationLaundries, setLocationLaundries] = useState([])
  const [initialRegion, setInitialRegion] = useState(null)
  const [region, setRegion] = useState(null)
  const [destination, setDetination] = useState({
    latitude: user.location.latitude,
    longitude: user.location.longitude
  })

  const getLaundryLocation = async () => {
    if(laundryPoint) {
      return
    }
    const response = await axios({
      url: `${process.env.EXPO_PUBLIC_SERVER_URL}/laundries`
    })
    
    setLocationLaundries(response.data)
  }

  const inputRegion = (latitude, longitude) => {
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0002,
      longitudeDelta: 0.002
    })
  }

  useEffect(() => {
    getLaundryLocation()
    if(laundryPoint) {
      setInitialRegion({
        latitude: laundryPoint.coordinates[0],
        longitude: laundryPoint.coordinates[1],
        latitudeDelta: 0.002,
        longitudeDelta: 0.002
      })
    } else {
      setInitialRegion({
        ...user.location,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002
      })
    }
  }, [])
  
  if(user.error) {
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

  if(!user.location) {
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
        initialRegion={initialRegion}
        onLongPress={(event) => {
          userPoint.setCoordinates({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude
          })
          setDetination({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude
          })
        }}
        region={region}>
          {
            laundryPoint &&
            <Marker coordinate={{
              latitude: laundryPoint.coordinates[0],
              longitude: laundryPoint.coordinates[1]
            }}>
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
          }
          {
            userPoint &&
            <Marker coordinate={destination}>
              <FontAwesome name="map-marker" size={40} color="red" style={{
                marginBottom: 40
              }} />
              <MapCallout>
                <Text>Oke</Text>
              </MapCallout>
            </Marker>
          }
        {locationLaundries.map(laundry => {
          return (
            <Marker coordinate={{
              latitude: laundry.laundry.locationPoint.coordinates[0],
              longitude: laundry.laundry.locationPoint.coordinates[1]
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
    </View>
  )
}
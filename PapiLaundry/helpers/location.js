import * as Location from 'expo-location'
import haversine from 'haversine-distance'
export const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if(status !== 'granted') {
      throw new Error ('Permission to access location was denied')
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.LocationAccuracy.Highest
    })
  
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
  }

export const getDistance = (locationA, locationB) => {
    return (Math.round(haversine(locationA, locationB))/1000).toFixed(2)
}
  
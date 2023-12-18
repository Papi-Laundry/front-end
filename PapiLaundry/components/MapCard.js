import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

export default function MapCard({ laundry, inputRegion }) {
  return (
    <TouchableWithoutFeedback onPress={() => {
      inputRegion(laundry.locationPoint.coordinates[0], laundry.locationPoint.coordinates[1])
    }}>
      <View style={{
        backgroundColor: 'white'
      }}>
        <Image
          source={{
            uri: laundry.image
          }}
          style={{
            width: 100,
            height: 100,
            objectFit: 'cover'
          }}
        />
        <Text>Oke</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
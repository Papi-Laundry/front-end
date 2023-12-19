import { Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from "../styles/style"
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { getDistance } from "../helpers/location";

export const Cards = ({ laundry, onPress }) => {
  // Check if laundry is undefined
  if (!laundry) {
    return null; // or handle the case where laundry is undefined
  }

  console.log(laundry);
  const { user } = useContext(UserContext);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>

      <Image style={styles.image} source={{ uri: laundry.image || '' }} />

      <View style={styles.details}>
        <Text style={styles.title}>{laundry?.name}</Text>
        <Text style={styles.subtitle}>{laundry?.location}</Text>
        <View style={styles.meters}>
          <Ionicons name="location" />
          {/* Check if user.location is available before accessing its properties */}
          <Text>
            ±{' '}
            {user?.location &&
              getDistance(
                { latitude: user.location.latitude, longitude: user.location.longitude },
                { latitude: laundry.locationPoint.coordinates[0], longitude: laundry.locationPoint.coordinates[1] }
              )}{' '}
            km Away
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

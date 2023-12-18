import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/style";
import { Ionicons } from '@expo/vector-icons';
import { AirbnbRating, Rating } from "react-native-elements";

export function RatingsTab() {
    return (
        <>
            <ScrollView style={styles.bgContainer} contentContainerStyle={{
                paddingTop: 10
            }}>
                <View style={styles.cardContainerRating}>
                    <Image style={styles.imageUserRating} source={{ uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                    <View style={styles.details}>
                        <Text style={styles.title}>User One</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <AirbnbRating
                                count={5}
                                defaultRating={3}
                                size={15}
                                showRating={false}
                            />
                        </View>
                        <View style={styles.meters}>
                            {/* <Ionicons name="location" /> */}
                            <Text>Good service, will do the laundry here again!</Text>
                        </View>
                        <Text style={styles.subtitle}>18 - 12 - 2023 00:50</Text>
                    </View>
                </View>

                <View style={styles.cardContainerRating}>
                    <Image style={styles.imageUserRating} source={{ uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                    <View style={styles.details}>
                        <Text style={styles.title}>User One</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <AirbnbRating
                                count={5}
                                defaultRating={3}
                                size={15}
                                showRating={false}
                            />
                        </View>
                        <View style={styles.meters}>
                            {/* <Ionicons name="location" /> */}
                            <Text>Good service, will do the laundry here again!</Text>
                        </View>
                        <Text style={styles.subtitle}>18 - 12 - 2023 00:50</Text>
                    </View>
                </View>

                <View style={styles.cardContainerRating}>
                    <Image style={styles.imageUserRating} source={{ uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                    <View style={styles.details}>
                        <Text style={styles.title}>User One</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <AirbnbRating
                                count={5}
                                defaultRating={3}
                                size={15}
                                showRating={false}
                            />
                        </View>
                        <View style={styles.meters}>
                            {/* <Ionicons name="location" /> */}
                            <Text>Good service, will do the laundry here again!</Text>
                        </View>
                        <Text style={styles.subtitle}>18 - 12 - 2023 00:50</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
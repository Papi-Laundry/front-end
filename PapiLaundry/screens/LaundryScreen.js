import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/style";

export default function LaundryScreen() {
    return (
        <>
            <View>
                <Image
                    style={styles.imageLaundry}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }}
                />
                <View>
                    <Text 
                    style={{
                        fontSize: 30,
                        margin: 10
                    }}
                    >Total Clean Laundry</Text>

                    

                </View>

            </View>
        </>
    )
}
import { Text, View, ScrollView } from "react-native";
import { styles } from "../../styles/style";
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { CardService } from "../../components/CardService";

export default function MyServicesScreen({ navigation }) {
    return (
        <>
            <Header
                backgroundColor="white"
                placement="center"
                leftComponent={
                    <Ionicons
                        name="chevron-back"
                        size={24}
                        color="black"
                        onPress={() => navigation.goBack()}
                    />
                }
                centerComponent={{ text: 'All Services', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <View style={styles.bgContainer}>
                <ScrollView>
                    <CardService />
                    <CardService />
                </ScrollView>
            </View>
        </>
    )
}
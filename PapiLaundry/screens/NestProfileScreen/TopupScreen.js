import { ScrollView } from "react-native";
import { Cards } from "../../components/Cards";
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { Button } from "../../components/Button";

export default function TopupScreen({ navigation }) {
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
                centerComponent={{ text: 'My Wallet', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <ScrollView>
                <Cards onPress={() => navigation.navigate("MyServicesScreen")} />
                <Cards />
                <Cards />
                <Button onPress={() => navigation.navigate("AddLaundryScreen")}>Add Laundry</Button>
            </ScrollView>
        </>
    )
}
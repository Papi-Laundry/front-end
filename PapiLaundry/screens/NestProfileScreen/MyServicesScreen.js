import { Text, View, ScrollView } from "react-native";
import { styles } from "../../styles/style";
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { CardService } from "../../components/CardService";
import { Button } from "../../components/Button";
import FloatingButton from "../../components/FloatingButton";

export default function MyServicesScreen({ navigation }) {
    const handleButtonPress = () => {
        console.log('Tombol ditekan!');
    };
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
                <FloatingButton
                    onPress={() => navigation.navigate("AddServiceScreen")}
                    buttonStyle={{ backgroundColor: '#074295' }}
                    textStyle={{ fontSize: 15 }}
                    text={<Ionicons name="add" size={30} color={'white'} />}
                />
            </View>
        </>
    )
}
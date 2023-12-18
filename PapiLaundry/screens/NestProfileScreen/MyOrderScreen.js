import { Text, View } from "react-native";
import { styles } from "../../styles/style";
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { OrderCard } from "../../components/OrderCard";

export default function MyOrderScreen({ navigation }) {
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
                centerComponent={{ text: 'My Order', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <View style={styles.bgContainer}>
                <OrderCard
                    title="Pesanan Saya"
                    desc="Selesai"
                    onPress={() => console.log('Card pressed')}
                />
            </View>
        </>

    )
}
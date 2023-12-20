import { ScrollView, TextInput, View } from "react-native";
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import CardTopUp from "../../components/CardTopUp";

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
                centerComponent={{ text: 'Top Up', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <View style={{
                // flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center',
                padding: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 10,
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {[10000,50000,75000,100000].map(price => {
                        return <CardTopUp price={price} key={price} toWeb={(url) => {
                            navigation.navigate("TopupWeb", { url })
                        }}/>
                    })}
                </View>
            </View>
        </>
    )
}
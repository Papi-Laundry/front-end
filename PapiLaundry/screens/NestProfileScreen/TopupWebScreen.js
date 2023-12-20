import { Text, View } from "react-native";
import { WebView } from 'react-native-webview'
import { styles } from "../../styles/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';


export default function TopupWebScreen({ route, navigation }) {
    const { url } = route.params
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
                centerComponent={{ text: 'Select Payment', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <View style={{
                flex: 1
            }}>

                <WebView source={{
                    uri: url
                }}
                    style={{
                        flex: 1
                    }} />
            </View>
        </>

    )
}
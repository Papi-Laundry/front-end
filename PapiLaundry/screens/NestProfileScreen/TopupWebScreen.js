import { Text, View } from "react-native";
import { WebView } from 'react-native-webview'

export default function TopupWebScreen({ route }) {
    const { url } = route.params
    return (
        <View style={{
            flex: 1
        }}>
            <WebView source={{
                uri: url
            }}
            style={{
                flex: 1
            }}/>
        </View>
    )
}
import { Text, View } from "react-native";
import { styles } from "../../styles/style";
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';

export default function EditProfileScreen({navigation}) {
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
                centerComponent={{ text: 'Profile Settings', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <View style={styles.bgContainer}>
                <Text>Chat Screen</Text>
            </View>
        </>
    )
}
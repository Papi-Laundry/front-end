import { Text, View } from "react-native";
import { styles } from '../styles/style';
import { Button } from "react-native-paper";
import { useContext } from "react"
import {LoginContext} from "../context/LoginContext"

export default function ProfileScreen({ navigation }) {
    const { logoutAction } = useContext(LoginContext)
    return (
        <View style={styles.bgContainer}>
            <Text>Profile Screen</Text>
            <Button icon="logout" onPress={() => logoutAction("token")}>
                Logout
            </Button>
        </View>
    )
}
import { TouchableOpacity } from "react-native"
import { Text } from "react-native";
import { styles } from "../styles/style";

export const Button = ({ children, onPress }) => {
    return (
        <>
            <TouchableOpacity style={styles.reusableButtonContainer} onPress={onPress}>
                <Text style={styles.reusableButton}>{children}</Text>
            </TouchableOpacity>
        </>
    )
}
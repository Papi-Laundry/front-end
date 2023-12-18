import { TouchableOpacity } from "react-native"
import { Text } from "react-native";
import { styles } from "../styles/style";

export const Button = ({ children, onPress, buttonStyle, textStyle }) => {
    return (
        <>
            <TouchableOpacity style={[styles.reusableButtonContainer, buttonStyle]} onPress={onPress}>
                <Text style={[styles.reusableButton, textStyle]}>{children}</Text>
            </TouchableOpacity>
        </>
    )
}
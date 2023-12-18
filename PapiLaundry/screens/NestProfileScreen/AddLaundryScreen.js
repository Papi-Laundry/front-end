import { Text, View } from "react-native";
import { styles } from "../../styles/style";
import { Header } from "react-native-elements/dist/header/Header";
import { Ionicons } from '@expo/vector-icons';
import { Input } from "react-native-elements";
import { ImagePickerComponent } from "../../components/ImagePicker";
import { Button } from "../../components/Button";

export default function AddLaundryScreen({ navigation }) {
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
                centerComponent={{ text: 'Add New Laundry', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <View style={styles.bgContainer}>
                <Text style={styles.textLabel}>Laundry Name</Text>
                <Input
                    style={styles.inputStyleCustom}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />

                <Text style={styles.textLabel}>Address</Text>
                <Input
                    style={styles.inputStyleCustom}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />
                <Text style={styles.textLabel}>Laundry Picture</Text>
                <ImagePickerComponent />

                <Button>Sumbit</Button>
            </View>
        </>
    )
}
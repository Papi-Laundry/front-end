import { Text, View } from "react-native";
import { styles } from "../../styles/style";
import { Header } from "react-native-elements/dist/header/Header";
import { Ionicons } from '@expo/vector-icons';
import { Input } from "react-native-elements";
import { ImagePickerComponent } from "../../components/ImagePicker";
import { Button } from "../../components/Button";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";

export default function AddServiceScreen({ navigation }) {
    const [selected, setSelected] = React.useState("");
    const data = [
        { key: '1', value: 'Cloth' },
        { key: '2', value: 'Shoes' },
        { key: '3', value: 'Bed Cover' },
    ]
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
                centerComponent={{ text: 'Add New Service', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <View style={styles.bgContainer}>
                <Text style={styles.textLabel}>Laundry Name</Text>
                <Input
                    style={styles.inputStyleCustom}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />

                <Text style={styles.textLabel}>Price</Text>
                <Input
                    style={styles.inputStyleCustom}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />

                <Text style={styles.textLabel}>Description</Text>
                <Input
                    style={styles.inputStyleCustom}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                />
                <Text style={styles.textLabel}>Service Category</Text>
                <View style={{paddingHorizontal: 20, marginBottom: 15}}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        onSelect={() => alert(selected)}
                        placeholder='Choose one'
                        boxStyles={{ borderRadius: 15, backgroundColor: '#e9f7f7', borderWidth: 0 }}
                    />
                </View>


                <Text style={styles.textLabel}>Service Image</Text>
                <ImagePickerComponent />

                <Button>Sumbit</Button>
            </View>
        </>
    )
}
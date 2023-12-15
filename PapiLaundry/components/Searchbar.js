import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/style";
import { Ionicons } from '@expo/vector-icons';


export const Searchbar = () => {
    return (
        <View>
            <View>
                <Text style={styles.greetingsTextH1}>
                    Hi Ikan,
                </Text>
                <Text style={styles.greetingsTextH2}>
                    Mau Laundry dimana kamu hari ini?
                </Text>
            </View>

            <TouchableOpacity style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" style={styles.searchBarLogo} />
                    <Text style={styles.searchBarText}>
                        Search Laundry here...
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

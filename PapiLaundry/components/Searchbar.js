import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/style";
import { Ionicons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../env/env";
import { LoginContext } from "../context/LoginContext";


export const Searchbar = ({ navigation }) => {
    const { getToken } = useContext(LoginContext)
    const [user, setUser] = useState(null)

    const getUser = async () => {
        try {
            const token = await getToken()
            const response = await axios.get(`${BASE_URL}/profiles`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            setUser(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <View>
            <View>
                <Text style={styles.greetingsTextH1}>
                    Hi {user?.name},
                </Text>
                <Text style={styles.greetingsTextH2}>
                    Where do you want to do laundry today?
                </Text>
            </View>

            <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate("SearchScreen")}>
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

import { ScrollView } from "react-native";
import { Cards } from "../../components/Cards";
import { Header } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';
import { Button } from "../../components/Button";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

export default function MyLaundryScreen({ navigation }) {
    const { getToken } = useContext(LoginContext)
    const [myLaundries, setMyLaundries] = useState([])
    const isFocused = useIsFocused()

    const fetchLaundries = async () => {
        try {
            const token = await getToken()
            const response = await axios({
                url: `${process.env.EXPO_PUBLIC_SERVER_URL}/laundries/my`,
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token
                }
            })

            setMyLaundries(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchLaundries()
    },[])

    useEffect(() => {
        if(isFocused) {
            fetchLaundries()
        }
    }, [isFocused])

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
                centerComponent={{ text: 'My Laundries', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
            <ScrollView>
            {myLaundries.map((laundry) => (
                <Cards
                    onPress={() => navigation.navigate("MyServicesScreen", { laundry })}
                    key={laundry.id}
                    laundry={laundry}
                />
            ))}
                <Button onPress={() => navigation.navigate("AddLaundryScreen")}>Add Laundry</Button>
            </ScrollView>
        </>
    )
}
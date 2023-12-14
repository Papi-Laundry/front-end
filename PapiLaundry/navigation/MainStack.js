import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navbar } from "../components/Navbar";
import { LoginForm } from "../components/LoginForm";

const Stack = createNativeStackNavigator()

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    statusBarColor: 'white',
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: 'white'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Navbar} />
                <Stack.Screen name="Login" component={LoginForm} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
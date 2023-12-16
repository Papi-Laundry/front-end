import { NavigationContainer } from "@react-navigation/native";
import { Navbar } from "../components/Navbar";
import { LoginForm } from "../components/LoginForm";
import {RegisterForm} from "../components/RegisterForm"
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

export default function MainStack() {
    const { isLoggedIn } = useContext(LoginContext)
    console.log(isLoggedIn);
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
            >{
                    isLoggedIn ? (
                    <>
                        {/* <Stack.Screen name="Login" component={LoginForm} /> */}
                    </>
                    ) : (
                        <>
                        <Stack.Screen name="Home" component={Navbar} />
                        {/* <Stack.Screen name="Register" component={RegisterForm} /> */}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
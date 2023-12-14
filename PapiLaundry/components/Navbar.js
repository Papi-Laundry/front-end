import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../navigation/screens/HomeScreen";
import ChatScreen from "../navigation/screens/ChatScreen";
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from "../navigation/screens/ProfileScreen";
import NotificationScreen from "../navigation/screens/NotificationScreen";
import { createStackNavigator } from "@react-navigation/stack";


const Tab = createBottomTabNavigator();

export const Navbar = ({ navigator }) => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    activeTintColor: '#074295',
                    inactiveTintColor: '#d1d1d1',
                    labelStyle: {
                        color: 'black',
                    },
                }}
            >
                <Tab.Screen
                    options={({ route }) => ({
                        headerShown: true,
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ?
                                <Ionicons name="home" size={size} color={color} /> :
                                <Ionicons name="home" size={size} color={color} />
                        ),
                    })}
                    name="Home" component={HomeScreen} />
                <Tab.Screen
                    options={({ route }) => ({
                        headerShown: true,
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ?
                                <Ionicons name="chatbubble" size={size} color={color} /> :
                                <Ionicons name="chatbubble" size={size} color={color} />
                        ),
                    })}
                    name="Chat" component={ChatScreen} />
                <Tab.Screen
                    options={({ route }) => ({
                        headerShown: true,
                        showLabel: false,
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ?
                                <Ionicons name="notifications" size={size} color={color} /> :
                                <Ionicons name="notifications" size={size} color={color} />
                        ),
                    })}
                    name="Notification" component={NotificationScreen} />
                <Tab.Screen
                    options={({ route }) => ({
                        headerShown: true,
                        showLabel: false,
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ?
                                <Ionicons name="person" size={size} color={color} /> :
                                <Ionicons name="person" size={size} color={color} />
                        ),
                    })}
                    name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
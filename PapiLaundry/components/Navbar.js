import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../navigation/screens/HomeScreen";
import ChatScreen from "../navigation/screens/ChatScreen";
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from "../navigation/screens/ProfileScreen";
import NotificationScreen from "../navigation/screens/NotificationScreen";

const Tab = createBottomTabNavigator();

export const Navbar = ({ navigator }) => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#074295',
                    tabBarInactiveTintColor: '#d1d1d1',
                    tabBarLabelStyle: {
                        color: 'black',
                    },
                })}
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
                        tabBarShowLabel: false,
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
                        tabBarShowLabel: false,
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

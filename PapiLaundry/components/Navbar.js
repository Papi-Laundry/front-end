import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import MapsScreen from "../screens/MapsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";
import { styles } from "../styles/style";

const Tab = createBottomTabNavigator();

const HeaderLeftComponent = () => (
    <Image
        source={require('../assets/IMG/IMG_0002.jpg')}
        style={{ width: 150, height: 30, marginLeft: 15 }}
    />
);

const CustomHeaderIcon = ({ icon, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <IconButton icon={icon} size={24} />
    </TouchableOpacity>
);

const HeaderRightComponent = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.topBarContainer}>
            <View style={styles.topBarSearch}>
                <CustomHeaderIcon
                    icon="menu"
                    onPress={() => logoutAction("token")}
                />
                {/* <Text style={styles.topBarSearchtext}>Search</Text> */}
            </View>
        </View>
    );
};

export const Navbar = ({ navigation, route }) => {
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
                        headerLeft: () => <HeaderLeftComponent />,
                        headerRight: () => <HeaderRightComponent />,
                        headerShown: true,
                        title: '',
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ?
                                <Ionicons name="home" size={size} color={color} /> :
                                <Ionicons name="home" size={size} color={color} />
                        ),
                    })}
                    name="Home" children={() => <HomeScreen navigation={navigation} />} />
                <Tab.Screen
                    options={({ route }) => ({
                        headerShown: true,
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ?
                                <Ionicons name="chatbox" size={size} color={color} /> :
                                <Ionicons name="chatbox" size={size} color={color} />
                        ),
                    })}
                    name="Chat" children={() => <ChatScreen navigation={navigation} />} />

                <Tab.Screen
                    options={({ route }) => ({
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size, focused }) => (
                            focused ?
                                <Ionicons name="map" size={size} color={color} /> :
                                <Ionicons name="map" size={size} color={color} />
                        ),
                    })}
                    name="Maps" component={MapsScreen} />
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
                    name="Profile" children={() => <ProfileScreen navigation={navigation} />} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

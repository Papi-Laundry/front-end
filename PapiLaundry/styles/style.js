import { StyleSheet } from "react-native";
import { MD3LightTheme, PaperProvider } from 'react-native-paper';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  bgContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },

  welcomeText: {
    fontSize: 15,
    marginTop: 30,
    color: '#9c9c9c',
    marginLeft: 45
  },

  containerForm: {
    marginTop: 25,
  },

  loginText: {
    fontSize: 30,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#1d54a1',
    marginLeft: 45
  },


  formText: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 40,
    fontWeight: '500',
    color: '#788ca7'
  },

  container: {
    // flex: 1,
    backgroundColor: '#d1cece',
  },

  containerImage: {
    // flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  formInputOuter: {
    alignItems: 'center',

  },

  formInputInner: {
    backgroundColor: '#e9f7f7',
    width: 350,
    marginTop: 10,
  },

  dropDown: {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
  },

  loginButton: {
    height: 55,
    marginTop: 50,
    width: 350,
    backgroundColor: "#FFB559",
    borderRadius: 50,
    justifyContent: "center",
  },
  // topBarContainer: {
  //   padding: 10,
  // },
  // topBarSearch: {
  //   backgroundColor: 'red',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 50,
  //   padding:6
  // },
  // topBarSearchtext: {
  //   fontSize: 15,
  // }

});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#074295',
    secondary: '#f1c40f',
    tertiary: 'white',
    background: "white",
    surface: "white",
  },
};


// <NavigationContainer>
//   <Stack.Navigator>
//   <Stack.Screen name="Home" component={HomeScreen} />
//   <Stack.Screen name="Chat" component={ChatScreen} />
//   <Stack.Screen name="Profile" component={ProfileScreen} />
{/* <PaperProvider theme={theme}> */ }
{/* <View> */ }

{/* <StatusBar style="auto" /> */ }
{/* <LoginForm /> */ }
{/* <RegisterForm/> */ }
{/* <Navbar /> */ }
{/* </View> */ }
{/* </PaperProvider> */ }
{/* </Stack.Navigator>
    </NavigationContainer> */}
import { StyleSheet } from "react-native";
import { MD3LightTheme, PaperProvider } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#074295',
    secondary: '#f1c40f',
    tertiary: 'white',
    background: "white",
    surface: "white",
  }
};

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

  searchContainer: {
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    marginTop: 5
  },

  searchBar: {
    flex: 1,
    flexDirection: "row"
  },

  searchBarText: {
    color: '#6c6c6c',
    fontSize: 20,
  },

  searchBarLogo: {
    color: '#6c6c6c',
    fontSize: 20,
    marginRight: 10
  },

  greetingsTextH1: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
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

  greetingsTextH2: {
    padding: 15,
    fontSize: 17
  },

  cardContainer: {
    backgroundColor: 'red',
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },

  radioButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ChipStyle: {
    backgroundColor: "#f7f7f7",
    color: '#383939',
    justifyContent: "center",
    padding: 7,
    borderRadius: 30,
    fontSize: 30,
    marginLeft: 15,
  },

  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
  meters: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center"
  },

  titleCard: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});





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
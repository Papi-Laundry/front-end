import { Dimensions, StyleSheet } from "react-native";
import { MD3LightTheme, PaperProvider } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;
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

  cardContainerRating: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#e9f7f7',
    borderRadius: 10,
    paddingLeft: 10
  },

  radioButtonServices: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#e9f7f7',
    borderRadius: 10,
  },

  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#074295',
    borderRadius: 30,
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  floatingButtonLeft: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#074295',
    borderRadius: 30,
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
  },

  floatingButtonIcon: {
    color: 'white',
    fontSize: 24,
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
    // alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  cardContainerService: {
    flexDirection: 'column',
    // alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    padding: 10,
    margin: 15
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: 10,
  },

  imageUserRating: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },

  carouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 15,

  },

  imageCarousel: {
    width: 400,
    height: 230,
    borderRadius: 15,
  },

  imageWrapper: {
    borderRadius: 15,
    overflow: 'hidden',
  },

  floatingButtonDown: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#c8c8cc',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 40,
    elevation: 3,
  },

  scrollLundryContainer: {
    flex: 1,
    maxHeight: 400
  },

  imageServices: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },

  imageLaundryContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },

  imageLaundry: {
    width: screenWidth,
    height: 300,
  },

  imageMaps: {
    width: 400,
    height: 200,
    borderRadius: 15
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.2)', // Menambahkan lapisan overlay
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  details: {
    marginLeft: 10,
    flex: 1,
  },

  detailsServices: {
    marginTop: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
  meters: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 5
  },
  metersLaundry: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 390,
    marginLeft: 15,
    marginTop: 10
  },
  topBarOnScroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    topBarContainer: {
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      elevation: 3,
  },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
},
  pinIcon: {
    marginRight: 8, // Mengatur jarak antara pin dan teks
  },
  addressText: {
    fontSize: 15,
    flexWrap: 'wrap',
  },

  titleCard: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },

  containerLaundryName: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  textLaundryName: {
    fontSize: 30,
    padding: 10,
    fontWeight: ''
  },
  secondTextLaundryName: {
    fontSize: 15,
    color: 'grey',
    marginLeft: 10
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  ratingText: {
    fontSize: 15,
    marginLeft: 5
  },
});


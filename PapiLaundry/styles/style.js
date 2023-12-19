import { Dimensions, StyleSheet } from "react-native";
import { MD3LightTheme } from 'react-native-paper';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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

  bgContainerNotif: {
    flex: 1,
  },

  bgContainerProfile: {
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
    backgroundColor: '#d1cece',
  },

  containerImage: {
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
    borderRadius: 10,
    paddingLeft: 10
  },

  radioButtonServices: {
    flexDirection: 'row',
    alignItems: 'center',
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
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  cardContainerCheckout: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
  },

  containerPaymentDetail: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
  },

  selectCheckout: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
  },

  cardContainerNotes: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    paddingTop: 10
  },

  cardContainerService: {
    flexDirection: 'column',
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

  imageCheckout: {
    width: 100,
    height: 100,
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

  imageLaundryContainerAdress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageLaundry: {
    width: screenWidth,
    height: 300,
  },

  imageMaps: {
    width: 450,
    height: 200,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject
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
    gap: 5,
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
    marginRight: 8,
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
  },

  textLaundryName: {
    fontSize: 30,
    padding: 10,
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

  containerAddress: {
    flex: 1,
    justifyContent: 'center',
  },

  cardTitleAddress: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  textAddress: {
    fontSize: 14,
    marginBottom: 5,
  },

  modalContent: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },

  modalTextContainer2: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f7f7f7',
    padding: 15,
    overflow: 'hidden',
    width: screenWidth,
    gap: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  modalText: {
    marginBottom: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f7f7f7',
    padding: 15,
    overflow: 'hidden',
    width: screenWidth
  },

  modalText2: {
    textAlign: 'left',
  },

  subtotalText: {
    fontWeight: '300'
  },

  modalTitle: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  containerScrollView: {
    width: '100%',
    backgroundColor: 'white',
  },

  metersAdress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 5
  },

  modalTitleSecondary: {
    padding: 15,
    overflow: 'hidden',
    width: screenWidth,
    gap: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  modalTextSavedAddress: {
    textAlign: 'start',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f7f7f7',
    padding: 15,
    overflow: 'hidden',
    width: screenWidth
  },

  editBtn: {
    padding: 10,
    backgroundColor: '#074295',
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold'
  },

  editBtnText: {
    color: 'white',
    fontWeight: 'bold'
  },

  titleMainAddress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 5,
    marginBottom: 10
  },

  TextStyle: {
    textDecorationLine: "underline",
    color: "#0059ff",
  },

  containerVoucher: {
    width: screenWidth,
    gap: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerPriceTotal: {
    width: screenWidth,
    maxWidth: 380,
    gap: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  containerTotalPaymentLeft: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },

  subtotalPriceText: {
    fontWeight: '300',
  },

  totalPriceText: {
    fontWeight: 'bold',
    color: '#074295',
  },

  containerCheckout: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 15,
  },

  buttonCheckout: {
    backgroundColor: '#074295',
    padding: 10,
    borderRadius: 10,
  },

  buttonTextChekout: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    padding: 16,
  },

  profileHeaderEdit: {
    alignItems: 'center',
    borderBottomColor: '#dbdbdb',
    padding: 16,
    justifyContent: 'center'
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  profileDetails: {
    marginLeft: 16,
  },

  profileDetailsEdit: {
    justifyContent: 'center',
  },

  profileName: {
    marginBottom: 8,
    fontSize: 24,
  },

  profileHandle: {
    color: '#657786',
    fontSize: 18,
  },

  LogoutBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  cardProfile: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    margin: 20,
  },

  cardProfileWallet: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    margin: 20,
    display: 'flex',
    flexDirection: 'row'
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardTitle2: {
    fontSize: 30,
    fontWeight: '100',
  },

  profileBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 15,
    backgroundColor: '#ffffff',
    padding: 10,
  },

  walletBtn: {

    alignItems: "center",
    gap: 15,
    backgroundColor: '#ffffff',
    padding: 10,
  },

  reusableButtonContainer: {
    backgroundColor: '#074295',
    padding: 10,
    margin: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },

  reusableButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },

  textLabel: {
    fontSize: 18,
    padding: 10,
    color: 'grey',
    marginHorizontal: 10
  },

  inputStyleCustom: {
    backgroundColor: '#e9f7f7',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 10
  },

  chatCard: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  sender: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  message: {
    fontSize: 14,
  },

  hatCard: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  cardContent: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
  },

  senderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sender: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  dateContainer: {
    alignSelf: 'flex-end',
  },

  date: {
    color: '#888',
    fontSize: 12,
  },

  imageChat: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { height: 2, width: 2 },
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardNotification: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  image: {
    width: 125,
    height: 125,
    borderRadius: 10,
    marginRight: 15,
  },

  imageNotification: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },

  info: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  price: {
    fontSize: 16,
    color: '#999',
    marginBottom: 10,
  },

  statusDelivery: {
    fontSize: 16,
    color: '#282828',
    marginBottom: 10,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#f1c40f',
    borderRadius: 10,
    marginRight: 7,
  },

  ratingText: {
    fontSize: 16,
    color: '#999',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  selectImageButton: {
    backgroundColor: '#f1c40f',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  containerMaps: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  incButton: {
    width: "10%",
    backgroundColor: "#FFB559",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 1
  },
  incButtonText: {
    width: 'auto',
    backgroundColor: "#fff0dd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 5
  },
  counterText: {
    fontSize: 14,
    color: '#000000',
    padding: 5
  },
  counterTextIcon: {
    fontSize: 20,
    color: '#000000',
    padding: 5
  },
  containerCounter: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: 5, 
    marginVertical: 10 
  },
  centeredContainer: {
    alignItems: 'center',
  },
  centeredImage: {
    width: 200, 
    height: 200,
  },
});

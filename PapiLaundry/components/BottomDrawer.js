import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const BottomDrawerWithAbsoluteButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDrawer = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.absoluteButton}>
        <Text style={styles.buttonText}>Absolute Button</Text>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleDrawer}
      >
        <View style={styles.modalContainer}>
          <View style={styles.drawer}>
            <Text style={styles.drawerText}>This is the bottom drawer!</Text>
            <Text style={styles.drawerText}>This is the bottom drawer!</Text>
            <Text style={styles.drawerText}>This is the bottom drawer!</Text>
            <Text style={styles.drawerText}>This is the bottom drawer!</Text>
            <Text style={styles.drawerText}>This is the bottom drawer!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleDrawer}>
              <Text style={styles.closeButtonText}>Close Drawer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  absoluteButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'blue',
    backgroundColor: 'red'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  drawerText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BottomDrawerWithAbsoluteButton;

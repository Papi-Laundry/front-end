import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

const SwiperDrawer = ({ children }) => {
 const pan = useRef(new Animated.ValueXY()).current;

 const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      },
    })
 ).current;

 const rStyle = {
    transform: pan.getTranslateTransform(),
 };

 return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, rStyle]} {...panResponder.panHandlers}>
        <Text style={styles.text}>Swipe me up and down!</Text>
      </Animated.View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
 },
 box: {
    height: 150,
    width: 150,
    backgroundColor: '#61DAFB',
    borderRadius: 5,
 },
 text: {
    textAlign: 'center',
    margin: 5,
 },
});

export default SwiperDrawer;
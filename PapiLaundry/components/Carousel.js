import * as React from 'react';
import Swiper from "react-native-swiper";
import { Image, View } from 'react-native';
import { styles } from '../styles/style';

export const CarouselImage = () => {

  const images = [
    "https://images.unsplash.com/photo-1624372635277-283042097f31?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624372635277-283042097f31?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624372635277-283042097f31?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624372635277-283042097f31?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624372635277-283042097f31?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  return (
    <View style={styles.carouselContainer}>
      <Swiper height={240} autoplay loop style={{borderRadius: 15, overflow: 'hidden',}}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image style={styles.imageCarousel} source={{ uri: image }} />
          </View>
        ))}
      </Swiper>
    </View>
  )
}

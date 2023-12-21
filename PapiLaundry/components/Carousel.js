import * as React from 'react';
import Swiper from "react-native-swiper";
import { Image, View } from 'react-native';
import { styles } from '../styles/style';

export const CarouselImage = () => {

  const images = [
    "https://img.freepik.com/free-vector/laundry-detergent-advertising-poster_1441-899.jpg?size=626&ext=jpg&ga=GA1.2.1051464932.1703137002&semt=aisr",
    "https://img.freepik.com/free-vector/washing-machine-advertising-banner-with-realistic-washing-machine-laundry-detergent-images-with-text-clickable-button_1284-33059.jpg?size=626&ext=jpg&ga=GA1.2.1051464932.1703137002&semt=ais",
    "https://img.freepik.com/free-vector/realistic-laundry-detergent-ad_1284-54617.jpg?w=2000&t=st=1703137075~exp=1703137675~hmac=cfa256c7dd1a7725021e3323a311f5a5955e472d56300eb7d4aff205ea2df944",
    "https://img.freepik.com/premium-vector/deep-clean-laundry-detergent-ads-with-tornado-removing-bacteria-out-3d-illustration-hygiene-product_317396-1475.jpg?w=1800",
    "https://img.freepik.com/free-vector/realistic-washing-machine-ad-poster-with-editable-text-badges-household-appliances-shiny-laundry-cleaning-detergents-vector-illustration_1284-83892.jpg?w=2000&t=st=1703137123~exp=1703137723~hmac=9161ab0de62fd573e27c1823e34296e44533c657a3f5c2e69f78ed694c82b941",
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

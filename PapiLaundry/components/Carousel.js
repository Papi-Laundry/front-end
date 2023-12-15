import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

export const CarouselImage = () => {
    const { width } = Dimensions.get('window');

    return (
        <View style={{ flex: 1 }}>
            <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1624372635277-283042097f31?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                  style={{ width: 400, height: 250, borderRadius: 20, margin: 15}}
                />
        </View>
    )
}

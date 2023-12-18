import { ScrollView, View } from "react-native";
import { Chip } from "react-native-paper";
import { styles } from "../styles/style";
import { useEffect, useState } from "react";
import axios from 'axios';

export const Categories = () => {
  const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/categories`)

      setCategories(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])
  return (
    <View>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map(category => {
          return <ChipStyleWithTitle title={category.name} key={category.id}/>
        })}
      </ScrollView>
    </View>
  )
}

const ChipStyleWithTitle = ({ title }) => {
  return (
    <>
      <Chip
        onPress={() => {
          console.log("test")
        }}
        textStyle={{ color: "#074295" }}
        style={styles.ChipStyle}
      >
        {title}
      </Chip>
    </>
  )
}


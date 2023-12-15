import { ScrollView, View } from "react-native";
import { Chip } from "react-native-paper";
import { styles } from "../styles/style";

export const Categories = () => {
    return (
        <View>
            <ScrollView
                style={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <ChipStyleWithTitle title="All" />
                <ChipStyleWithTitle title="Cloth" />
                <ChipStyleWithTitle title="Shoes" />
                <ChipStyleWithTitle title="Cloth" />
                <ChipStyleWithTitle title="Shoes" />
                <ChipStyleWithTitle title="Cloth" />
                <ChipStyleWithTitle title="Shoes" />
            </ScrollView>
        </View>
    )
}

const ChipStyleWithTitle = ({ title }) => {
    return (
        <>
            <Chip
                onPress={() => console.log("Pressed")}
                textStyle={{ color: "#074295" }}
                style={styles.ChipStyle}
            >
                {title}
            </Chip>
        </>
    )
}


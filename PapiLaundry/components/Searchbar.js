import { Text, View } from "react-native"
import { SearchBar } from 'react-native-elements';
import { styles } from "../styles/style";

export const Searchbar = () => {
    return (
        <View>
            <SearchBar
                placeholder="Find Laundry Here..."
                onChangeText={this.updateSearch}
                // value={search}
                platform="ios"
                style={styles.searchBar}
            />
        </View>
    )
}
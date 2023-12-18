import { ScrollView, Text, View } from "react-native";
import { styles } from '../styles/style';
import { NotificationCard } from "../components/NotificationCard";
const product = {
    id: 1,
    title: 'Extra Shoes Cleaning',
    status: 'Order Completed',
    image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsZWFufGVufDB8fDB8fHww',
}


export default function NotificationScreen({ navigation }) {
    return (
        <ScrollView style={styles.bgContainerNotif}>
            <NotificationCard product={product} />
            <NotificationCard product={product} />
            <NotificationCard product={product} />
            <NotificationCard product={product} />
            <NotificationCard product={product} />
            <NotificationCard product={product} />
            <NotificationCard product={product} />
            <NotificationCard product={product} />
        </ScrollView>
    )
}

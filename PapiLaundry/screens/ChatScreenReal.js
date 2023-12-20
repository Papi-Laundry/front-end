import { SafeAreaView, StyleSheet, View } from 'react-native';
import * as TalkRn from '@talkjs/expo';
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function chatSreen(){
    const { user, setUser } = useContext(UserContext)
    const me = {
        id: user.User.id,
        name: user.User.username,
        email: user.User.email,
        photoUrl: user.image,
        welcomeMessage: 'Hey there! How are you? :-)',
        role: 'default',
      };
    return(
        <SafeAreaView style={styles.container}>
            <TalkRn.Session appId='tmh4UMrA' me={me} style={styles.flexContainer}>
                <TalkRn.ConversationList
                    onSelectConversation={(conversation) => {
                    // Handle conversation selection
                    // navigation.navigate('Chat', { conversationId: conversation.id });
                    }}
                />
            </TalkRn.Session>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flexContainer: {
      flex: 1,
    },
  });
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { styles } from '../styles/style';
import * as TalkRn from '@talkjs/react-native';

export default function ChatScreen() {
    const chatClient = useRef(null);

    useEffect(() => {
        // Inisialisasi TalkJS saat komponen dimount
        TalkRn.initialize({
            appId: 'twvZJNEc',
            me: {
                id: 'USER_ID_1',
                name: 'John Doe',
                email: 'john@example.com',
                photoUrl: 'https://example.com/john.png',
                welcomeMessage: 'Hey there! How can I help you?'
            }
        }).then(client => {
            chatClient.current = client;
        }).catch(err => {
            console.error('Error initializing TalkJS:', err);
        });

        // Bersihkan instance TalkJS saat komponen unmount
        return () => {
            if (chatClient.current !== null) {
                chatClient.current.destroy();
                chatClient.current = null;
            }
        };
    }, []);

    return (
        <View style={styles.bgContainer}>
            <TalkRn.Chatbox client={chatClient.current} />
        </View>
    );
}

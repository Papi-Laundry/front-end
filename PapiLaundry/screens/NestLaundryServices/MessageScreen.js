import React from 'react';
import * as TalkRn from '@talkjs/expo';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function MessageScreen(props) {
  const me = {
    id: '123456789',
    name: 'Alice',
    email: 'alice@example.com',
    photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
    welcomeMessage: 'Hey there! How are you? :-)',
    role: 'default',
  };

  const other = {
    id: '987654321',
    name: 'Sebastian',
    email: 'Sebastian@example.com',
    photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
    welcomeMessage: 'Hey, how can I help? https://google.com',
    role: 'default',
  };

  const conversationBuilder = TalkRn.getConversationBuilder(
    TalkRn.oneOnOneId(me, other)
  );

  conversationBuilder.setParticipant(me);
  conversationBuilder.setParticipant(other);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexContainer}>
        <TalkRn.Session appId='twvZJNEc' me={me} style={styles.flexContainer}>
          <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
        </TalkRn.Session>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
});
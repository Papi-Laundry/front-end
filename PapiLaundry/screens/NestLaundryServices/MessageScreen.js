import React, { useContext, useEffect, useState } from 'react';
import * as TalkRn from '@talkjs/expo';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { LoginContext } from '../../context/LoginContext';
import { UserContext } from '../../context/UserContext';

export default function MessageScreen(props) {
  const [profile, setProfile] = useState({})
  const { user, setUser } = useContext(UserContext)
  const {laundry} = useContext(UserContext)
 
 
  // useEffect(() => {
  //   const user_token = async()=>{
  //     const token = await access_token()
  //     const {data} = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/profiles`, {
  //       headers : {
  //         Authorization : `Bearer ${token}`
  //       }
  //     })
  //     setProfile(data.data.user)
  //   }
  //   user_token()
  // }, [])
  
  const me = {
    id: user.User.id,
    name: user.User.username,
    email: user.User.email,
    photoUrl: user.image,
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
        <TalkRn.Session appId='tmh4UMrA' me={me} style={styles.flexContainer}>
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
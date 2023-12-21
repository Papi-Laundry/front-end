import React, {useContext}from 'react';
import * as TalkRn from '@talkjs/expo';
import { UserContext } from '../context/UserContext';
import { View } from 'react-native';
import { Text } from 'react-native';

const ChatList = ({navigation }) => {

    let { user } = useContext(UserContext)
      user = {
        id: user.id,
        name: user.name,
        email: user.User.email,
        photoUrl: user.image,
        role: 'default',
      };
    
      return (
        <View style={{
            padding: 20,
            flex: 1
        }}>
            <TalkRn.Session appId={process.env.EXPO_PUBLIC_TALKJS} me={user} enablePushNotifications={true}>
                <TalkRn.ConversationList loadingComponent={<View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text>Loading</Text>
                    </View>}/>
            </TalkRn.Session>
        </View>
      )
};

export default ChatList;
import React, {useContext}from 'react';
import * as TalkRn from '@talkjs/expo';
import { UserContext } from '../../context/UserContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';

<<<<<<< HEAD
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Text } from 'react-native';

const MessageScreen = ({navigation, route}) => {
    const { laundry } = route.params

    let { user } = useContext(UserContext)
    const chatboxRef = React.useRef(null)
=======
export default function MessageScreen({route}) {
  const [profile, setProfile] = useState({})
  const { user, setUser } = useContext(UserContext)
  const { laundryOwner } = route.params;
console.log(laundryOwner,'tess');
  const me = {
    id: user.User.id,
    name: user.User.username,
    email: user.User.email,
    photoUrl: user.image,
    welcomeMessage: 'Hey there! How are you? :-)',
    role: 'default',
  };

  const other = {
    id: `${laundryOwner.userId}`,
    name: `${laundryOwner.name}`,
    email: 'Sebastian@example.com',
    photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
    welcomeMessage: 'Hey, how can I help? https://google.com',
    role: 'default',
  };
  console.log(other.id, me.id,"<<");
>>>>>>> 401c749e22ababdde2b2a437d01411770374d415

      user = {
        id: user.id,
        name: user.name,
        photoUrl: user.image,
        role: 'default',
      };
    
      const other = {
        id: laundry.owner.userId,
        name: laundry.name,
        photoUrl: laundry.image,
        role: 'default',
      };
    
      const conversationId = TalkRn.oneOnOneId(user.id, other.id);
      const conversationBuilder = TalkRn.getConversationBuilder(conversationId);
    
      conversationBuilder.setParticipant(user);
      conversationBuilder.setParticipant(other);
    
      return (
          <>
            <Header
                backgroundColor="white"
                placement="center"
                leftComponent={
                    <Ionicons
                        name="chevron-back"
                        size={24}
                        color="black"
                        onPress={() => navigation.goBack()}
                    />
                }
                centerComponent={{ text: 'Chat', style: { color: 'black', fontWeight: 'bold', fontSize: 20 } }}
            />
              <TalkRn.Session appId={process.env.EXPO_PUBLIC_TALKJS} me={user} enablePushNotifications={true}>
                <TalkRn.Chatbox
                  ref={chatboxRef}
                  loadingComponent={<View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text>Loading</Text>
                    </View>}
                  conversationBuilder={conversationBuilder}
                  messageField={{
                    enterSendsMessage: false,
                    placeholder: 'Type a message'
                  }}
                  highlightedWords={['me', 'you']}
                />
              </TalkRn.Session>
          </>
      )
};

export default MessageScreen;
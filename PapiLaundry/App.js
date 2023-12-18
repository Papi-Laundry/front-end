import * as React from 'react';
import MainStack from './stacks/MainStack';
import { LoginProvider } from './context/LoginContext';
import { theme } from './styles/style';
import { PaperProvider } from 'react-native-paper';
import { UserContext } from './context/UserContext';

export default function App() {
  const [user, setUser] = React.useState(null)

  return (
    <PaperProvider theme={theme}>
      <LoginProvider>
        <UserContext.Provider value={{
          user,
          setUser
        }}>
          <MainStack />
        </UserContext.Provider>
      </LoginProvider>
    </PaperProvider>
  );
}

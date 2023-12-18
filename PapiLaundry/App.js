import * as React from 'react';
import MainStack from './stacks/MainStack';
import { LoginProvider } from './context/LoginContext';
import { theme } from './styles/style';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LoginProvider>
        <MainStack />
      </LoginProvider>
    </PaperProvider>
  );
}


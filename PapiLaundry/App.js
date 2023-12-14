import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './navigation/MainStack';
import { theme } from './styles/style';
import { PaperProvider } from 'react-native-paper';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MainStack />
    </PaperProvider>
  );
}


import React from 'react';
import { StatusBar, View } from 'react-native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';
import { theme } from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={{flex: 1, backgroundColor: theme.colors.lightBackground}}>
        <Home/>
      </View>
    </>
  );
}
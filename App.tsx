import React from 'react';
import { StatusBar, View } from 'react-native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Routes } from './src/routes';
import { theme } from './src/global/styles/theme';

import { AuthProvider, useAuth } from './src/hooks/auth'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading ) {
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
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </View>
    </>
  );
}
import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
 } from '@react-navigation/drawer';
 import { MaterialIcons } from '@expo/vector-icons';

import { styles } from '../screens/Drawer/styles';
import { theme } from '../global/styles/theme'

import { Home } from '../screens/Home';
import { EditProfile } from '../screens/EditProfile';
import { MyEvents } from '../screens/MyEvents';
import { Profile } from '../screens/MyProfile';
import { AppointmentCreate } from '../screens/AppointmentsCreate';
import { AppointmentInfo } from '../screens/AppointmentInfo';

import { useAuth } from '../hooks/auth';


const pages = {
  profile: {
    icon: "face" as const,
    label: 'meu perfil',
    screen: Profile
  },

  myEvents: {
    icon: 'today' as const,
    label: 'meus eventos',
    screen: MyEvents
  },
}

const Drawer = createDrawerNavigator();


//@ts-ignore
function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  async function handleSignOut(){
      try {
          await signOut();

      } catch (error) {
          console.log(error);
          Alert.alert('Deu bosta ai na conta google.');
      }
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label={
        () => 
        <>
        <View style={styles.header}>
          <Image style={styles.profilePicture} source={{uri: user.photo }}/>
          <View style={styles.textContent}>
            <Text style={styles.title}>oi {user.nickname},</Text>
            <Text style={styles.subtitle}>Tudo certo?</Text>
          </View>
        </View>
        </>
        } onPress={() => alert('alerta funciona')} />
      <DrawerItemList {...props} />
      <DrawerItem onPress={handleSignOut} 
        label="logout"
        style={styles.drawerItem}
        labelStyle={styles.drawerItemLabel}
        icon={() => (
          <MaterialIcons
          name="logout"
          size={24}
          color={theme.colors.purple}
        />
        )}
        />
    </DrawerContentScrollView>
  );
}

export function AppRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: styles.background,
        drawerActiveTintColor: 'rgba(78, 65, 135, 0.25)'
      }}
    >
      {Object.values(pages).map((item) => 
      <Drawer.Screen key={item.label} options={{
        title: item.label,
        drawerItemStyle: styles.drawerItem,
        drawerLabelStyle: styles.drawerItemLabel,
        drawerIcon: () => (
          <MaterialIcons
            name={item.icon}
            size={24}
            color={theme.colors.purple}
          />
        ),
        }} name={item.label} component={item.screen} />
      )}
      <Drawer.Screen name="Home" options={{
          drawerItemStyle: styles.drawerHome
        }} component={Home}/>

      <Drawer.Screen
        name="AppointmentCreate" options={{
          drawerItemStyle: styles.drawerHome
        }} component={AppointmentCreate}
        />
      <Drawer.Screen
        name="AppointmentInfo" options={{
          drawerItemStyle: styles.drawerHome
        }} component={AppointmentInfo}
        />
      <Drawer.Screen
        name="EditProfile" options={{
          drawerItemStyle: styles.drawerHome
        }} component={EditProfile}
        />
    </Drawer.Navigator>
  );
}
 
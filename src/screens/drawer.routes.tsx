import React from 'react';
import {View, Text, Image} from 'react-native';
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
import { SignIn } from '../screens/SignIn';
import { MyEvents } from '../screens/MyEvents';
import { Profile } from '../screens/MyProfile';
import { Notification } from '../screens/Notifications';

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

  notifications: {
    icon: "notifications-none" as const,
    label: "notificações",
    screen: Notification
  },

  logout: {
    icon: 'logout' as const,
    label: 'logout',
    screen: SignIn
  }
}

const Drawer = createDrawerNavigator();

//@ts-ignore
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label={
        () => 
        <>
        <View style={styles.header}>
          <Image style={styles.profilePicture} source={{uri:"https://bit.ly/dan-abramov"}}/>
          <View style={styles.textContent}>
            <Text style={styles.title}>hello Turnardo,</Text>
            <Text style={styles.subtitle}>Whats up?</Text>
          </View>
        </View>
        </>
        } onPress={() => alert('alerta funciona')} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export function MyDrawer() {
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
    </Drawer.Navigator>
  );
}

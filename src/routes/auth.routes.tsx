import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentInfo } from '../screens/AppointmentInfo';
import { AppointmentCreate } from '../screens/AppointmentsCreate';

import { MyDrawer } from './drawer.routes'

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Drawer"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
<<<<<<< HEAD
      />
=======
        />
      <Screen
        name="AppointmentInfo"
        component={AppointmentInfo}
        />
>>>>>>> 09639ddc05dbc3e835fc71223ad90ccc894e2cb9
    </Navigator>
  );
}
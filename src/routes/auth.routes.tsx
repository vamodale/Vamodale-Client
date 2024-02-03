import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentInfo } from '../screens/AppointmentInfo';
import { AppointmentCreate } from '../screens/AppointmentsCreate';
import { Register } from '../screens/Register';


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
        name="SignIn"
        component={SignIn}
      />
      <Screen 
        name="Register"
        component={Register}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
        
      <Screen
        name="AppointmentInfo"
        component={AppointmentInfo}
        />
    </Navigator>
  );
}
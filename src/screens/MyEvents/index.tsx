import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Background } from '../../components/Header/Background';
import { Search } from '../../components/Header/Search';
import { Add } from '../../components/Header/Add';
import { Event } from '../../components/Event';

import { MaterialIcons } from '@expo/vector-icons';
//import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { globalStyles } from '../../global/styles/globals';
import { GreenLargeButton } from '../../components/GreenLargeButton';
import { useNavigation } from '@react-navigation/native';

export function MyEvents() {
  const navegation = useNavigation();

  function handleAppointmentCreate() {
      //@ts-ignore
      navegation.navigate('AppointmentCreate');
  }

  function handleDrawer() {
    //@ts-ignore
    navegation.openDrawer();;
}
    return (
        <View style={globalStyles.lightBackground} >
          <Text>Meus Eventos</Text>
        </View>
    );
}
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { Background } from '../../components/Header/Background';
import { Search } from '../../components/Header/Search';
import { Add } from '../../components/Header/Add';
import { Event } from '../../components/EventCard';

import { get_events } from '../../services/get_event';

import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { globalStyles } from '../../global/styles/globals';
import { GreenLargeButton } from '../../components/GreenLargeButton';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function Home() {
  const [events, setEvents] = useState([])

  const navegation = useNavigation();
  
  get_events().then( events => {
    setEvents(events)
  } )

  function handleAppointmentCreate() {
      //@ts-ignore
      navegation.navigate('AppointmentCreate');
  }

  function handleDrawer() {
    //@ts-ignore
    navegation.openDrawer();
  }

    return (
        <View style={globalStyles.lightBackground} >
          <Background>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <MaterialIcons style={globalStyles.headerLeftIcon} name="menu-open" size={24} color={theme.colors.white} onPress={handleDrawer}/>
                <Text style={globalStyles.headerTitle}>dois vizinhos</Text>
              </View>
              <View style={styles.headerContent}>
                <Search style={styles.search}/>
                <Add/>
              </View>
            </View>
          </Background>
          <View style={{padding: 24}}>
            {events.map(event => {
              return <Event event={event}/>
            })}
          </View>
          <View>
            <Text style={styles.footerText}>Não encontrou o que procurava?</Text>
            <GreenLargeButton onPress={handleAppointmentCreate} title="cadastre um evento"/>
          </View>
        </View>
    );
}
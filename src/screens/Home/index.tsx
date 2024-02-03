import React, { useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { getForegroundPermissionsAsync, requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
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
import { useAuth } from '../../hooks/auth'

export function Home() {
  const [events, setEvents] = useState([])
  const { user } = useAuth()
  const navegation = useNavigation();
  
  useEffect(()=>{
    getForegroundPermissionsAsync().then(async permission => {
      if ( !permission.granted ) {
        permission = await requestForegroundPermissionsAsync()
      }
      if ( permission.granted ) {
        const position = await getCurrentPositionAsync({accuracy: 5}) 
        get_events('', position.coords.latitude, position.coords.longitude).then( events => {
          setEvents(events)
        } )
      }else {
        get_events().then( events => {
          setEvents(events)
        } )
      }
    })
  }, [])


    useEffect(() => {
        get_events().then(events => {
            setEvents(events)
        })
    }, [])

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
                        <MaterialIcons style={globalStyles.headerLeftIcon} name="menu-open" size={24} color={theme.colors.white} onPress={handleDrawer} />
                        <Text style={globalStyles.headerTitle}>{user.city}</Text>
                    </View>
                    <View style={styles.headerContent}>
                        <Search style={styles.search} />
                        <Add />
                    </View>
                </View>
            </Background>
            <View style={{ padding: 24 }}>
                {events !== undefined ?
                    events.map(event => {
                        return <Event event={event} />
                    }) : null
                }
            </View>
            <View>
                <Text style={styles.footerText}>Didn't find what you were looking for?</Text>
                <View style={{ paddingHorizontal: 24 }}>
                    <GreenLargeButton onPress={handleAppointmentCreate} title="create an event" />
                </View>
            </View>
        </View>
    );
}
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Background } from '../../components/Header/Background';
import { UserIn } from '../../components/AppointmentInfo/UserIn';
import { Join } from '../../components/AppointmentInfo/Join';
import { Slot } from '../../components/AppointmentInfo/Slot';

import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { globalStyles } from '../../global/styles/globals';
import { useNavigation } from '@react-navigation/native';

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import { useEffect } from 'react';
import { get_events } from '../../services/get_event';

export function AppointmentInfo( {route, navigation } ) {
  const navegation = useNavigation();
  const {eventId} = route.params
  const [jogadores, setJogadores] = useState([])
  const [event, setEvent] = useState(null)

  useEffect(()=>{
    get_events(eventId).then(currentEvent => {
      currentEvent.date = new Date(currentEvent.date)

      setEvent(currentEvent)
      setJogadores(currentEvent?.players)
    })
  },[route])

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  return (
    <View style={globalStyles.purpleBackground} >
      {event && <>
      <Background>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <MaterialIcons 
                onPress={() => navegation.navigate("Home")} 
                style={globalStyles.headerLeftIcon} 
                name="chevron-left" 
                size={24} 
                color={theme.colors.white}
              />
              <Text style={globalStyles.headerTitle}>{event.address.city}</Text>
          </View>
          <View style={styles.headerContent}>
              <MaterialIcons 
                style={globalStyles.headerRightIcon} 
                name="share" 
                size={24} 
                color={theme.colors.white}
              />
            </View>
          </View>
        </Background>
      <View style={{padding: 24}}>
        <View style={styles.container}>
          <Text style={styles.title}>{event.name}</Text>
          <View>
          <View style={styles.infoWrapper}>
              <MaterialIcons name="emoji-events" size={24} color={theme.colors.white}/>
              <Text style={styles.infoText}>{event.sport}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <MaterialIcons name="watch-later" size={24} color={theme.colors.white}/>
              <Text style={styles.infoText}>{format(event.date, 'EEEE', {locale: ptBR}).capitalize()}, {event.date.getDate().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}/{event.date.getMonth().toLocaleString('pt-BR', {minimumIntegerDigits: 2})} - às {event.date.getHours().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}h{event.date.getMinutes().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.info}>
                <MaterialIcons name="room" size={24} color={theme.colors.white}/>
                <Text style={styles.infoText}>{event.address.street}, {event.address.number}, {event.address.neighborhood} - {event.address.complement}</Text>
              </View>
              <View>
                <MaterialIcons name="link" size={24} color={theme.colors.white}/>
              </View>
            </View>
          </View>
        </View>
        {
          jogadores.map(jogador => {
            return <UserIn player = {jogador}/>
          })
        }
        {
          !event.is_owner && event.positions_number - jogadores.length > 0?
          <Join event={event} addJogador={setJogadores}/>: null
        }
        <Slot slots={event.positions_number - jogadores.length}/>
      </View></>}
    </View>
    );
}
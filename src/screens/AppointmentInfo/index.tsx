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

export function AppointmentInfo( {route, navigation } ) {
  const navegation = useNavigation();
  const {event} = route.params
  const [jogadores, setJogadores] = useState(event.jogadores)

  console.log(jogadores)

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  
  return (
    <View style={globalStyles.purpleBackground} >
      <Background>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <MaterialIcons 
                onPress={() => navegation.goBack()} 
                style={globalStyles.headerLeftIcon} 
                name="chevron-left" 
                size={24} 
                color={theme.colors.white}
              />
              <Text style={globalStyles.headerTitle}>dois vizinhos</Text>
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
          <Text style={styles.title}>{event.nome}</Text>
          <View>
          <View style={styles.infoWrapper}>
              <MaterialIcons name="emoji-events" size={24} color={theme.colors.white}/>
              <Text style={styles.infoText}>{event.esporte}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <MaterialIcons name="watch-later" size={24} color={theme.colors.white}/>
              <Text style={styles.infoText}>{format(event.data, 'EEEE', {locale: ptBR}).capitalize()}, {event.data.getDate().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}/{event.data.getMonth().toLocaleString('pt-BR', {minimumIntegerDigits: 2})} - às {event.data.getHours().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}h{event.data.getMinutes().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.info}>
                <MaterialIcons name="room" size={24} color={theme.colors.white}/>
                <Text style={styles.infoText}>{event.endereco.rua}, {event.endereco.numero}, {event.endereco.bairro} - {event.endereco.complemento}</Text>
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
          event.num_vagas - jogadores.length > 0?
          <Join event={event} addJogador={setJogadores}/>: null
        }
        <Slot slots={event.num_vagas - jogadores.length}/>
      </View>
    </View>
    );
}
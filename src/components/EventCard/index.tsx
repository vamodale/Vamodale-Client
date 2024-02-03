import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';

export const Event = ( props :any ) => {
  const navegation = useNavigation();

  function handleAppointmentInfo(){
    //@ts-ignore
    navegation.navigate('AppointmentInfo', {eventId: props.event.id})
  }
  
  props.event.date = new Date(props.event.date)
  
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  return (
    <TouchableOpacity onPress={handleAppointmentInfo}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            {props.event.name}
          </Text>
          <View style={styles.subtitle}>
            <Text style={styles.date}>
              {format(props.event.date, 'EEEE', {locale: ptBR}).capitalize()}, {props.event.date.getDate().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}/{props.event.date.getMonth().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}{" "}
            </Text>
            <Text style={styles.hour}>
            - às {props.event.date.getHours().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}h{props.event.date.getMinutes().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}
            </Text>
          </View>
        </View>
        <View style={styles.attributes}>
          <Text>
            <Text style={styles.attributeLabel}>Owner: </Text>
            <Text style={styles.attribute}>{props.event.owner_name}</Text>
          </Text>
          <Text>
            <Text style={styles.attributeLabel}>Address: </Text>
            <Text style={styles.attribute}>{props.event.address.street}, {props.event.address.number}, {props.event.address.neighborhood} - {props.event.address.complement}</Text>
          </Text>
          <Text>
            <Text style={styles.attributeLabel}>Sport: </Text>
            <Text style={styles.attribute}>{props.event.sport}</Text>
          </Text>
        </View>
        <View style={styles.subscribers}>
          { 
          //@ts-ignore
          props.event.players.map( jogador => {
            return ( <View style={styles.subscriberWraper}>
              <Image style={styles.subscriber} source={{uri:jogador.profile_picture}}/>
            </View> )
          } )
        } 
          {
            Array(props.event.positions_number-props.event.players.length).fill(0).map( vaga => {
              return (
                <View style={styles.subscriberWraper}>
                  <View style={styles.subscriber}/>
                </View>
              )
            })
          }
        </View>
        <>
          <View style={[{...styles.infoAdornmentWrapper,...{backgroundColor: props.event.is_owner ? theme.colors.yellow : theme.colors.green}}, {...styles.infoAdornmentLeftWrapper, ...{backgroundColor: props.event.is_owner ? theme.colors.yellow : theme.colors.green}}]}>
            <View style={styles.infoAdornment}/>
          </View>
          <View style={{...styles.info, ...{backgroundColor: props.event.is_owner ? theme.colors.yellow : theme.colors.green}}}>
            <MaterialIcons name="info" size={20} color={theme.colors.purple}/>
          </View>
          <View style={[styles.infoAdornmentWrapper, {...styles.infoAdornmentTopWrapper, ...{backgroundColor: props.event.is_owner ? theme.colors.yellow : theme.colors.green}}]}>
            <View style={styles.infoAdornment}/>
          </View>
        </>
      </View>
    </TouchableOpacity>
  )
}
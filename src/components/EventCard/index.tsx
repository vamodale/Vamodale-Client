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
    navegation.navigate('AppointmentInfo', {event: props.event})
  }
  
  props.event.data = new Date(props.event.data)
  
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  return (
    <TouchableOpacity onPress={handleAppointmentInfo}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            {props.event.nome}
          </Text>
          <View style={styles.subtitle}>
            <Text style={styles.date}>
              {format(props.event.data, 'EEEE', {locale: ptBR}).capitalize()}, {props.event.data.getDate().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}/{props.event.data.getMonth().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}{" "}
            </Text>
            <Text style={styles.hour}>
            - às {props.event.data.getHours().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}h{props.event.data.getMinutes().toLocaleString('pt-BR', {minimumIntegerDigits: 2})}
            </Text>
          </View>
        </View>
        <View style={styles.attributes}>
          <Text>
            <Text style={styles.attributeLabel}>Organizador: </Text>
            <Text style={styles.attribute}>{props.event.nome_criador}</Text>
          </Text>
          <Text>
            <Text style={styles.attributeLabel}>Local: </Text>
            <Text style={styles.attribute}>{props.event.endereco.rua}, {props.event.endereco.numero}, {props.event.endereco.bairro} - {props.event.endereco.complemento}</Text>
          </Text>
          <Text>
            <Text style={styles.attributeLabel}>Esporte: </Text>
            <Text style={styles.attribute}>{props.event.esporte}</Text>
          </Text>
        </View>
        <View style={styles.subscribers}>
          { 
          //@ts-ignore
          props.event.jogadores.map( jogador => {
            return ( <View style={styles.subscriberWraper}>
              <Image style={styles.subscriber} source={{uri:jogador.profile_picture}}/>
            </View> )
          } )
        } 
          {
            Array(props.event.num_vagas-props.event.jogadores.length).fill(0).map( vaga => {
              return (
                <View style={styles.subscriberWraper}>
                  <View style={styles.subscriber}/>
                </View>
              )
            })
          }
        </View>
        <>
          <View style={[styles.infoAdornmentWrapper, styles.infoAdornmentLeftWrapper]}>
            <View style={styles.infoAdornment}/>
          </View>
          <View style={styles.info}>
            <MaterialIcons name="info" size={20} color={theme.colors.purple}/>
          </View>
          <View style={[styles.infoAdornmentWrapper, styles.infoAdornmentTopWrapper]}>
            <View style={styles.infoAdornment}/>
          </View>
        </>
      </View>
    </TouchableOpacity>
  )
}
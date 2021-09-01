import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';
import { join_event } from '../../../services/join_event';
import { useState } from 'react';
import { get_events } from '../../../services/get_event';

export const Join = ({event, addJogador}) => {
  function handleEventJoin(){
    join_event( event.id ).then( _ => {
      event = get_events(event.id)
      event.then( res => {
        addJogador(res.jogadores)
      } )
    })
  }

  return (
  <View style={styles.userIn}>
    <TouchableOpacity onPress={handleEventJoin}>
      <View style={styles.backgroundColor}>
        <MaterialIcons style={styles.icon} name="add" size={24} color={theme.colors.white}/>
      </View>
    </TouchableOpacity>
    <View style={styles.textWrapper}>
        <Text style={styles.nickname}>
          Compareça no evento
        </Text>
      <View style={styles.subtitle}>
        <Text style={styles.click}>clique aqui </Text>
        <Text style={styles.plustext}>e participe</Text>
      </View>
    </View>
  </View>
  )
}
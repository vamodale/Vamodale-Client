import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';
import { join_event } from '../../../services/join_event';
import { useState } from 'react';
import { get_events } from '../../../services/get_event';
import { useNavigation } from '@react-navigation/native';

export const Join = ({event, addJogador}) => {
  const navegation = useNavigation();
  function handleEventJoin(){
    join_event( event.id ).then( _ => {
      navegation.navigate('AppointmentInfo', {eventId: event.id})
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
          Join the event
        </Text>
      <View style={styles.subtitle}>
        <Text style={styles.click}>click here </Text>
        <Text style={styles.plustext}>and have fun</Text>
      </View>
    </View>
  </View>
  )
}
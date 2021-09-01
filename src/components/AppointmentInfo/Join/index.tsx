import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export const Join:React.FC = ({children}) => {
  function handleEventJoin(){

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
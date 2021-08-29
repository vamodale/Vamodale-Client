import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export const UserIn:React.FC = ({children}) => {

  function handleEventLeave() {
    
  }

  var leaveble = 0;

  return (
    <View style={styles.userIn}>
      <View style={styles.wrapperPicture}>
        <Image style={styles.profilePicture} source={{uri:"https://bit.ly/dan-abramov"}}/>
        <View style={styles.textWrapper}>
          <View style={styles.names}>
            <Text style={styles.nickname}>
              Turnado
            </Text>
            <Text style={styles.name}> | </Text>
            <Text style={styles.name}>
              Arthur Sosnowski
            </Text>
          </View>
          <View>
            <Text style={styles.date}>cadastrou o evento hà 4 dias</Text>
          </View>
        </View>
      </View>
      {leaveble ? 
      <TouchableOpacity onPress={handleEventLeave}>
        <MaterialIcons name="close" size={24} color={theme.colors.white}/>
      </TouchableOpacity>
      : null }
    </View>
  )
}
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export const UserIn = ( props ) => {

  function handleEventLeave() {
    
  }

  var leaveble = 0;

  return (
    <View style={styles.userIn}>
      <View style={styles.wrapperPicture}>
        {
          props.player.profile_picture == '' ?
          <View style={styles.profilePicture}/> :
        <Image style={styles.profilePicture} source={{uri:props.player.profile_picture}}/>
        }
        <View style={styles.textWrapper}>
          <View style={styles.names}>
            <Text style={styles.nickname}>
              {props.player.nickname}
            </Text>
            <Text style={styles.name}> | </Text>
            <Text style={styles.name}>
            {props.player.name}
            </Text>
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
import React from 'react';
import {View, Text, Image} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';


export const Slot = ( props ) => {
  return (
    <View style={styles.userIn}>
      <View style={styles.backgroundColor}>
        <Text style={styles.icon}>{props.slots}</Text>
      </View>
      <View style={styles.textWrapper}>
          <Text style={styles.nickname}>
            +{props.slots} positions still available
          </Text>
      </View>
    </View>
  )
}
import React from 'react';
import {View, Text, Image} from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export const ProfileContent:React.FC = ({children}) => {
  return (
    <View style={styles.container} >
      <View style={styles.head}>
        <Image style={styles.profilePicture} source={{uri:"https://bit.ly/dan-abramov"}}/>
        <View style={styles.names}>
          <Text style={styles.name}>
            Arthur Sosnowski
          </Text>
          <Text style={styles.nickname}>
           Turnado
          </Text>
        </View>
      </View>
      <View style={styles.separator}/>
      <View style={styles.attributes}>
        <View style={styles.atributeWrapper}>
          <Text style={styles.attributeLabel}>idade</Text>
          <Text style={styles.attribute}>20</Text>
        </View>
        <View style={styles.atributeWrapper}>
          <Text style={styles.attributeLabel}>cidade</Text>
          <Text style={styles.attribute}>dois vizinhos</Text>
        </View>
      </View>
    </View>
  )
}
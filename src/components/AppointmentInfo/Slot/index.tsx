import React from 'react';
import {View, Text, Image} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';


export const Slot:React.FC = ({children}) => {
  return (
    <View style={styles.userIn}>
      <View style={styles.backgroundColor}>
        <Text style={styles.icon}>3</Text>
      </View>
      <View style={styles.textWrapper}>
          <Text style={styles.nickname}>
            +3 vagas para o evento
          </Text>
        <View style={styles.subtitle}>
          <Text style={styles.plustext}>ainda há 3 vagas para rolar uma partidinha</Text>
        </View>
      </View>
    </View>
  )
}
import React from 'react';
import {View} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export const Add:React.FC = ({children}) => {
  return (
    <View style={styles.backgroundIcon} >
      <MaterialIcons name="add" size={24} color={theme.colors.white}/>
    </View>
  )
}
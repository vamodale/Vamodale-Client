import React from 'react';
import {TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export const Add:React.FC = ({children}) => {
  return (
    <TouchableOpacity style={styles.backgroundIcon} >
      <MaterialIcons name="add" size={24} color={theme.colors.white}/>
    </TouchableOpacity>
  )
}
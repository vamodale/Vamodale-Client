import React from 'react';
import {View, ViewProps} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export const Search:React.FC<ViewProps> = (props) => {
  return (
    <View {...props}>
      <View style={styles.backgroundIcon} >
        <MaterialIcons name="search" size={24} color={theme.colors.purple}/>
      </View>
    </View>
  )
}
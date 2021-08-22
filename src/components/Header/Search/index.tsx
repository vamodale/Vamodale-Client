import React from 'react';
import {View, ViewProps, Text, TouchableOpacity, TouchableOpacityProps,} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export const Search:React.FC<ViewProps> = (props) => {

  return (
    <TouchableOpacity
      {...props}
    >
      <View style={styles.backgroundIcon} >
        <MaterialIcons name="search" size={24} color={theme.colors.purple}/>
      </View>
    </TouchableOpacity>
  )
}
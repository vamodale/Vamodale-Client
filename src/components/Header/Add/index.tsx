import React from 'react';
import {TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Add:React.FC = ({children}) => {
  const navegation = useNavigation();

  function handleAppointmentCreate() {
      //@ts-ignore
      navegation.navigate('AppointmentCreate');
  }


  return (
    <TouchableOpacity style={styles.backgroundIcon} >
      <MaterialIcons onPress={handleAppointmentCreate} name="add" size={24} color={theme.colors.white}/>
    </TouchableOpacity>
  )
}
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Background } from '../../components/Header/Background';
import { UserIn } from '../../components/AppointmentInfo/UserIn';
import { Join } from '../../components/AppointmentInfo/Join';
import { Slot } from '../../components/AppointmentInfo/Slot';

import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { globalStyles } from '../../global/styles/globals';
import { useNavigation } from '@react-navigation/native';

export function AppointmentInfo() {
  const navegation = useNavigation();

  return (
    <View style={globalStyles.purpleBackground} >
      <Background>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <MaterialIcons 
                onPress={() => navegation.goBack()} 
                style={globalStyles.headerLeftIcon} 
                name="chevron-left" 
                size={24} 
                color={theme.colors.white}
              />
              <Text style={globalStyles.headerTitle}>dois vizinhos</Text>
          </View>
          <View style={styles.headerContent}>
              <MaterialIcons 
                style={globalStyles.headerRightIcon} 
                name="share" 
                size={24} 
                color={theme.colors.white}
              />
            </View>
          </View>
        </Background>
      <View style={{padding: 24}}>
        <View style={styles.container}>
          <Text style={styles.title}>Futebas na Cancha da ACDC</Text>
          <View>
            <View style={styles.infoWrapper}>
              <MaterialIcons name="watch-later" size={24} color={theme.colors.white}/>
              <Text style={styles.infoText}>Domingo, 11/07 - às 14H00</Text>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.info}>
                <MaterialIcons name="room" size={24} color={theme.colors.white}/>
                <Text style={styles.infoText}>Campo ACDC, Bairro Das Towers, 1337</Text>
              </View>
              <View>
                <MaterialIcons name="link" size={24} color={theme.colors.white}/>
              </View>
            </View>
          </View>
        </View>
        <UserIn/>
        <Join/>
        <Slot/>
      </View>
    </View>
    );
}
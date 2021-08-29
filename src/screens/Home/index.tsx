import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Background } from '../../components/Header/Background';
import { Search } from '../../components/Header/Search';
import { Add } from '../../components/Header/Add';
import { Event } from '../../components/Event';

import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { globalStyles } from '../../global/styles/globals';
import { GreenLargeButton } from '../../components/GreenLargeButton';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navegation = useNavigation();

  function handleAppointmentCreate() {
      //@ts-ignore
      navegation.navigate('AppointmentCreate');
  }

  function handleDrawer() {
    //@ts-ignore
    navegation.openDrawer();
}
    return (
        <View style={globalStyles.lightBackground} >
          <Background>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <TouchableOpacity>
                  <MaterialIcons style={globalStyles.headerLeftIcon} name="menu-open" size={24} color={theme.colors.white} onPress={handleDrawer}/>
                </TouchableOpacity>
                <Text style={globalStyles.headerTitle}>dois vizinhos</Text>
              </View>
              <View style={styles.headerContent}>
                <Search style={styles.search}/>
                <Add/>
              </View>
            </View>
          </Background>
          <View style={{padding: 24}}>
            <Event/>
          </View>
          <View>
            <Text style={styles.footerText}>Não encontrou o que procurava?</Text>
            <GreenLargeButton onPress={handleAppointmentCreate} title="cadastre um evento"/>
          </View>
        </View>
    );
}
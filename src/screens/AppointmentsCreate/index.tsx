import React from 'react';
import {
    View,
    Text,
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

export function AppointmentCreate() {
    return (
        <View>
          <Background>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <MaterialIcons style={globalStyles.headerLeftIcon} name="menu-open" size={24} color={theme.colors.white}/>
                <Text style={globalStyles.headerTitle}>dois vizinhos</Text>
              </View>
            </View>
          </Background>
        </View>
    );
}
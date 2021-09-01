import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { Background } from '../../components/Header/Background';
import {ProfileContent} from '../../components/ProfileContent';
import {GreenLargeButton} from '../../components/GreenLargeButton';
import { RedLargeButton } from '../../components/RedLargeButton';


import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { globalStyles } from '../../global/styles/globals';

import { useNavigation } from '@react-navigation/native';

export function EditProfile() {
  const navegation = useNavigation();


    return (
        <View style={globalStyles.lightBackground}>
            <Background>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <MaterialIcons 
                            //@ts-ignore
                            onPress={() => navegation.goBack("order")} 
                            style={globalStyles.headerLeftIcon} 
                            name="chevron-left" 
                            size={24} 
                            color={theme.colors.white}
                        />
                        <Text style={globalStyles.headerTitle}>editar Perfil</Text>
                    </View>
                </View>
            </Background>
                <ProfileContent/>
                <View style={styles.buttons}>
                <GreenLargeButton title="confirmar"/>
                <View style={styles.buttonSeparation}/>
                <RedLargeButton title="cancelar"/>
                </View>
        </View>
    );
}
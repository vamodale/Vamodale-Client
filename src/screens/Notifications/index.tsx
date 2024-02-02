import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { Background } from '../../components/Header/Background';
import { ProfileContent } from '../../components/ProfileContent';
import { GreenLargeButton } from '../../components/GreenLargeButton';
import { Notification as Card } from '../../components/NotificationCard';

import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { globalStyles } from '../../global/styles/globals';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';



export function Notification() {
    const navegation = useNavigation();

    const notifications = [
        {
            event: {
                nome: 'Evento teste',
                data: 1706814240,
                nome_criador: 'Eduardo da Silva',
                esporte: 'Futebol',
                inviting: 'Guilherme Tonello',
                endereco: {
                    rua: 'Marechal Carmona',
                    numero: '6',
                    bairro: 'Centro',
                    complemento: '2° esq',
                }
            }
        },
        {
            event: {
                nome: 'Evento teste',
                data: 1706814240,
                nome_criador: 'Eduardo da Silva',
                esporte: 'Futebol',
                inviting: 'Guilherme Tonello',
                endereco: {
                    rua: 'Marechal Carmona',
                    numero: '6',
                    bairro: 'Centro',
                    complemento: '2° esq',
                }
            }
        },
        {
            event: {
                nome: 'Evento teste',
                data: 1706814240,
                nome_criador: 'Eduardo da Silva',
                esporte: 'Futebol',
                inviting: 'Guilherme Tonello',
                endereco: {
                    rua: 'Marechal Carmona',
                    numero: '6',
                    bairro: 'Centro',
                    complemento: '2° esq',
                }
            }
        },
        {
            event: {
                nome: 'Evento teste',
                data: 1706814240,
                nome_criador: 'Eduardo da Silva',
                esporte: 'Futebol',
                inviting: 'Guilherme Tonello',
                endereco: {
                    rua: 'Marechal Carmona',
                    numero: '6',
                    bairro: 'Centro',
                    complemento: '2° esq',
                }
            }
        },
    ];

    return (
        <View style={[globalStyles.lightBackground]}>
            <Background>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <MaterialIcons
                            //@ts-ignore
                            onPress={() => navegation.navigate("Home")}
                            style={globalStyles.headerLeftIcon}
                            name="chevron-left"
                            size={24}
                            color={theme.colors.white}
                        />
                        <Text style={globalStyles.headerTitle}>Notifications</Text>
                    </View>
                </View>
            </Background>
            <ScrollView style={{ paddingHorizontal: 24, marginVertical: 20 }}>
                {notifications !== undefined ?
                    notifications.map(notification => {
                        return <Card props={notification} />
                    }) : null
                }
            </ScrollView>
        </View>
    );
}
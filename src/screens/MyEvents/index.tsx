import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Background } from '../../components/Header/Background';
import { Search } from '../../components/Header/Search';
import { Add } from '../../components/Header/Add';
import { Event } from '../../components/EventCard';

import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { globalStyles } from '../../global/styles/globals';
import { GreenLargeButton } from '../../components/GreenLargeButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export function MyEvents() {
    const navegation = useNavigation();

    const oldEvents = [
        {
            nome: 'Evento teste 3',
            data: 1706814240,
            nome_criador: 'Eduardo da Silva',
            esporte: 'Futebol',
            inviting: 'Guilherme Tonello',
            num_vagas: 5,
            jogadores: [
                {
                    profile_picture: ''
                }
            ],
            endereco: {
                rua: 'Marechal Carmona',
                numero: '6',
                bairro: 'Centro',
                complemento: '2° esq',
            }
        },
        {
            nome: 'Evento teste 3',
            data: 1706814240,
            nome_criador: 'Eduardo da Silva',
            esporte: 'Futebol',
            inviting: 'Guilherme Tonello',
            num_vagas: 5,
            jogadores: [
                {
                    profile_picture: ''
                }
            ],
            endereco: {
                rua: 'Marechal Carmona',
                numero: '6',
                bairro: 'Centro',
                complemento: '2° esq',
            }
        },
        {
            nome: 'Evento teste 3',
            data: 1706814240,
            nome_criador: 'Eduardo da Silva',
            esporte: 'Futebol',
            inviting: 'Guilherme Tonello',
            num_vagas: 5,
            jogadores: [
                {
                    profile_picture: ''
                }
            ],
            endereco: {
                rua: 'Marechal Carmona',
                numero: '6',
                bairro: 'Centro',
                complemento: '2° esq',
            }
        },
        {
            nome: 'Evento teste 3',
            data: 1706814240,
            nome_criador: 'Eduardo da Silva',
            esporte: 'Futebol',
            inviting: 'Guilherme Tonello',
            num_vagas: 5,
            jogadores: [
                {
                    profile_picture: ''
                }
            ],
            endereco: {
                rua: 'Marechal Carmona',
                numero: '6',
                bairro: 'Centro',
                complemento: '2° esq',
            }
        },
        {
            nome: 'Evento teste 3',
            data: 1706814240,
            nome_criador: 'Eduardo da Silva',
            esporte: 'Futebol',
            inviting: 'Guilherme Tonello',
            num_vagas: 5,
            jogadores: [
                {
                    profile_picture: ''
                }
            ],
            endereco: {
                rua: 'Marechal Carmona',
                numero: '6',
                bairro: 'Centro',
                complemento: '2° esq',
            }
        }

    ];
    const nextEvents = [
        {
            nome: 'Evento teste 3',
            data: 1706814240,
            nome_criador: 'Eduardo da Silva',
            esporte: 'Futebol',
            inviting: 'Guilherme Tonello',
            num_vagas: 5,
            jogadores: [
                {
                    profile_picture: ''
                }
            ],
            endereco: {
                rua: 'Marechal Carmona',
                numero: '6',
                bairro: 'Centro',
                complemento: '2° esq',
            }
        },
        {
            nome: 'Evento teste 3',
            data: 1706814240,
            nome_criador: 'Eduardo da Silva',
            esporte: 'Futebol',
            inviting: 'Guilherme Tonello',
            num_vagas: 5,
            jogadores: [
                {
                    profile_picture: ''
                }
            ],
            endereco: {
                rua: 'Marechal Carmona',
                numero: '6',
                bairro: 'Centro',
                complemento: '2° esq',
            }
        }
    ];

    function handleAppointmentCreate() {
        //@ts-ignore
        navegation.navigate('AppointmentCreate');
    }

    function handleDrawer() {
        //@ts-ignore
        navegation.openDrawer();;
    }

    return (
        <View style={globalStyles.lightBackground} >
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
                        <Text style={globalStyles.headerTitle}>My Events</Text>
                    </View>
                </View>
            </Background>
            <ScrollView>
                <View style={{ padding: 24 }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <MaterialIcons name='event' size={24} color={theme.colors.purple} />
                        <Text style={styles.attributeLabel}>Next Events</Text>
                    </View>
                    <ScrollView style={{ marginTop: 20, marginHorizontal: 4 }}>
                        {nextEvents !== undefined ?
                            nextEvents.map(event => {
                                return <Event event={event} />
                            }) : <Text style={styles.footerText}>No Events found</Text>
                        }
                    </ScrollView>
                </View>
                <View style={{ padding: 24 }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <MaterialIcons name='event-available' size={24} color={theme.colors.purple} />
                        <Text style={styles.attributeLabel}>Past Events</Text>
                    </View>
                    <ScrollView style={{ marginTop: 20, marginHorizontal: 4 }}>
                        {oldEvents !== undefined ?
                            oldEvents.map(event => {
                                return <Event event={event} />
                            }) : <Text style={styles.footerText}>No Events found</Text>
                        }
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}
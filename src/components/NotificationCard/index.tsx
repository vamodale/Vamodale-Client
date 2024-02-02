import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';

export const Notification = (props: any) => {
    const navegation = useNavigation();

    function handleAppointmentInfo() {
        //@ts-ignore
        navegation.navigate('AppointmentInfo', { event: props.props.event })
    }

    props.props.event.data = new Date(props.props.event.data)

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    return (
        <TouchableOpacity onPress={handleAppointmentInfo} style={{
            marginBottom: 10
        }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        {props.props.event.nome}
                    </Text>
                    <View style={styles.subtitle}>
                        <Text style={styles.date}>
                            {format(props.props.event.data, 'EEEE', { locale: ptBR }).capitalize()}, {props.props.event.data.getDate().toLocaleString('pt-BR', { minimumIntegerDigits: 2 })}/{props.props.event.data.getMonth().toLocaleString('pt-BR', { minimumIntegerDigits: 2 })}{" "}
                        </Text>
                        <Text style={styles.hour}>
                            - às {props.props.event.data.getHours().toLocaleString('pt-BR', { minimumIntegerDigits: 2 })}h{props.props.event.data.getMinutes().toLocaleString('pt-BR', { minimumIntegerDigits: 2 })}
                        </Text>
                    </View>
                </View>
                <View style={styles.attributes}>
                    <Text>
                        <Text style={styles.attributeLabel}>Organizador: </Text>
                        <Text style={styles.attribute}>{props.props.event.nome_criador}</Text>
                    </Text>
                    <Text>
                        <Text style={styles.attributeLabel}>Local: </Text>
                        <Text style={styles.attribute}>{props.props.event.endereco.rua}, {props.props.event.endereco.numero}, {props.props.event.endereco.bairro} - {props.props.event.endereco.complemento}</Text>
                    </Text>
                    <Text>
                        <Text style={styles.attributeLabel}>Esporte: </Text>
                        <Text style={styles.attribute}>{props.props.event.esporte}</Text>
                    </Text>
                </View>
                <View style={styles.subscribers}>
                    <Text style={styles.attribute}>
                        {props.props.event.inviting}
                    </Text>
                </View>
                <>
                    <View style={[styles.infoAdornmentWrapper, styles.infoAdornmentLeftWrapper]}>
                        <View style={styles.infoAdornment} />
                    </View>
                    <View style={styles.info}>
                        <MaterialIcons name="delete-outline" size={20} color={theme.colors.purple} />
                    </View>
                    <View style={[styles.infoAdornmentWrapper, styles.infoAdornmentTopWrapper]}>
                        <View style={styles.infoAdornment} />
                    </View>
                </>
            </View>
        </TouchableOpacity>
    )
}
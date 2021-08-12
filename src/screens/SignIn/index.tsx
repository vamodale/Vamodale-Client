import React from 'react';
import {
    View,
    Text,
    Image,
    Button
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import VamoDaleImg from '../../assets/vamo_dale.png';
import { styles } from './styles';

export function SignIn() {
    return (
        <View style={styles.container}>
            <Image
                source={VamoDaleImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View>
                <ButtonIcon
                    title="Login com Google"
                    activeOpacity={0.7}
                />

                <Text style={styles.title}>
                    Ainda não tem conta?{'\n'}
                    <Text style={styles.subtitle}>
                        Registre-se aqui
                    </Text>
                </Text>
            </View>
        </View>
    );
}
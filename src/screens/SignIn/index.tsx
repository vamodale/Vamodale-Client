import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';
import VamoDaleImg from '../../assets/vamo_dale.png';
import { styles } from './styles';

export function SignIn() {
    const navegation = useNavigation();

    function handleSignIn() {
        //@ts-ignore
        navegation.navigate('Drawer');
    }

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
                    onPress={handleSignIn}
                />

                <Text style={styles.p1}>
                    Ainda não tem conta?{'\n'}
                </Text>
                <Text style={styles.p2}>
                    Registre-se aqui
                </Text>
            </View>
        </View>
    );
}
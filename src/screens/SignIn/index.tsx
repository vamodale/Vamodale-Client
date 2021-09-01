import React, { useContext } from 'react';
import { Alert } from 'react-native'
import {
    View,
    Text,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import { ButtonIcon } from '../../components/ButtonIcon';
import VamoDaleImg from '../../assets/vamo_dale.png';
import { styles } from './styles';

export function SignIn() {
    const navegation = useNavigation();
    const { signInWithGoogle } = useAuth();

    async function handleSignInWithGoogle(){
        try {
            await signInWithGoogle
             //@ts-ignore
            navegation.navigate('Drawer');

        } catch (error) {
            console.log(error);
            Alert.alert('Deu bosta ai na conta google.');
        }
    }

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
                    onPress={handleSignInWithGoogle}
                />
            </View>
        </View>
    );
}
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

export function SignOut() {
    const { signOut } = useAuth();

    async function handleSignOut(){
        try {
            await signOut();

        } catch (error) {
            console.log(error);
            Alert.alert('Deu bosta ai na conta google.');
        }
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
                    title="SignOut"
                    activeOpacity={0.7}
                    onPress={handleSignOut}
                />
            </View>
        </View>
    );
}
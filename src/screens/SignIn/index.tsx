import React, { useContext, useState } from 'react';
import { Alert, Button, Pressable, TextInput } from 'react-native'
import {
    View,
    Text,
    Image,
} from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';

import { AuthProvider, useAuth } from '../../hooks/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

import VamoDaleImg from '../../assets/vamo_dale.png';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { reqLogin } from '../../services/login';
import { Home } from '../Home';
import { Register } from '../Register';

export function SignIn() {

    const { signIn } = useAuth();

    const navegation = useNavigation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleLogin() {
        try {

            const response = await signIn(email, password);

        } catch (error) {
            Alert.alert('error', 'idk whats happened')
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={VamoDaleImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={{ width: '100%', padding: 24 }}>
                <View style={styles.atributeWrapper}>
                    <Text style={styles.attributeLabel}>email</Text>
                    <TextInput style={styles.inputText} onChangeText={(event) => setEmail(event)} placeholder='type your email'></TextInput>
                </View>
                <View style={styles.atributeWrapper}>
                    <Text style={styles.attributeLabel}>password</Text>
                    <TextInput style={styles.inputText} secureTextEntry={true} onChangeText={(event) => setPassword(event)} placeholder='type your password'></TextInput>
                </View>

                <Pressable style={styles.button} onPress={handleLogin} >
                    <View>
                        <Text style={[styles.buttonLabel, {
                            borderWidth: 0,
                            width: '100%'
                        }]}>Login</Text>
                    </View>
                </Pressable>
                <Text style={[styles.attributeLabel, { textAlign: 'center', marginTop: 5 }]} onPress={() => navegation.navigate('Register', Register)} >Don't have an Account? Register</Text>
            </View>
        </View>
    );
}
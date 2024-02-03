import React, { useContext, useState } from 'react';
import { Alert, Button, Pressable, TextInput } from 'react-native'
import {
    View,
    Text,
    Image,
} from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import VamoDaleImg from '../../assets/vamo_dale.png';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { reqLogin } from '../../services/login';
import { Home } from '../Home';
import { SignIn } from '../SignIn';
import ImagePickerComponent from '../../components/ImageField';
import { reqCadastro } from '../../services/cadastro';
import { useAuth } from '../../hooks/auth';

export function Register() {
    const navegation = useNavigation();
    const [picture, setPicture] = useState<string>('')
    const [name, setName] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { register } = useAuth();

    async function handleRegister() {

        try {

            const response = await register({
                name: name,
                nickname: nickname,
                email: email,
                id: password,
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrD_ti5VQ_GyBLdbLakRUO6AXdsG6XQnjR8ah2lBon4tMZUPfvo7jNm4vbNhJA45nFTs&usqp=CAU',
                city: 'Bragança'
            });

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
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.atributeWrapper, { width: '50%', marginRight: 5 }]}>
                        <Text style={styles.attributeLabel}>name</Text>
                        <TextInput style={styles.inputText} onChangeText={(event) => setName(event)} placeholder='name'></TextInput>
                    </View>
                    <View style={[styles.atributeWrapper, { width: '50%' }]}>
                        <Text style={styles.attributeLabel}>nickname</Text>
                        <TextInput style={styles.inputText} onChangeText={(event) => setNickname(event)} placeholder='nickname'></TextInput>
                    </View>
                </View>

                <View style={styles.atributeWrapper}>
                    <Text style={styles.attributeLabel}>email</Text>
                    <TextInput style={styles.inputText} onChangeText={(event) => setEmail(event)} placeholder='type your email'></TextInput>
                </View>
                <View style={styles.atributeWrapper}>
                    <Text style={styles.attributeLabel}>password</Text>
                    <TextInput style={styles.inputText} secureTextEntry={true} onChangeText={(event) => setPassword(event)} placeholder='type your password'></TextInput>
                </View>

                <Pressable style={styles.button} onPress={handleRegister} >
                    <View>
                        <Text style={[styles.buttonLabel, {
                            borderWidth: 0,
                            width: '100%'
                        }]}>Register</Text>
                    </View>
                </Pressable>
                <Text style={[styles.attributeLabel, { textAlign: 'center', marginTop: 5 }]} onPress={() => navegation.navigate('SignIn', SignIn)}>Do you have an Account? Login</Text>
            </View>
        </View>
    );
}
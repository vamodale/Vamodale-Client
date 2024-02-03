import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as AuthSession from 'expo-auth-session';
import { reqLogin } from '../services/login'
import { getForegroundPermissionsAsync, getLastKnownPositionAsync, requestForegroundPermissionsAsync, getCurrentPositionAsync, reverseGeocodeAsync } from 'expo-location'
import { reqCadastro } from '../services/cadastro';

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    nickname: string;
    email: string;
    photo?: string;
    city: string;
}

interface IAuthContextData {
    user: User;
    signIn(email: string, password: string): Promise<void>
    register(user: User): Promise<void>
    signOut(): Promise<void>
    userStorageLoading: Boolean;
}

interface AuthorizationResponse {
    params: {
        access_token: string;
    };
    type: string;
}


const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [userStorageLoading, setUserStorageLoading] = useState(true);

    const userStorageKey = '@vamodale:user';


    async function signIn(email: string, password: string) {
        try {

            await login(password, email).then(async res => {
                if (res !== 400) {
                    await AsyncStorage.setItem('Authorization', res.Authorization);

                    const userLogged = {
                        id: res.user.id,
                        name: res.user.name,
                        nickname: res.user.nickname,
                        email: res.user.email,
                        photo: res.user.photo,
                        city: 'Bragança'
                    };
                    await getForegroundPermissionsAsync().then(async permission => {
                      if ( !permission.granted ) {
                        permission = await requestForegroundPermissionsAsync()
                      }
                      if ( permission.granted ) {
                        const position = await getCurrentPositionAsync({accuracy: 5}) 
                        console.log(position)
                        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=locality&key=AIzaSyCcd5CQ9O5r5Bv9ifk8P_TPIWmdUS8KQCU`, {
                          mode: 'cors'
                        });
                        const retorno = await response.json();
                        userLogged.city = retorno.results[0].address_components[0].long_name
                      }
                    })
                    setUser(userLogged);
                    await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
                }
            })

        } catch (error) {
            throw new Error(error);
        }
    }

    async function register(user: User) {
        let userBody = {
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            openid: user.id,
            profile_picture: user.photo,
            city: 'Bragança'
        }
        await getForegroundPermissionsAsync().then(async permission => {
          if ( !permission.granted ) {
            permission = await requestForegroundPermissionsAsync()
          }
          if ( permission.granted ) {
            const position = await getCurrentPositionAsync({accuracy: 5}) 
            console.log(position)
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=locality&key=AIzaSyCcd5CQ9O5r5Bv9ifk8P_TPIWmdUS8KQCU`, {
              mode: 'cors'
            });
            const retorno = await response.json();
            userBody.city = retorno.results[0].address_components[0].long_name
          }
        })
        await reqCadastro(userBody).then(data => {
            AsyncStorage.setItem('Authorization', data.Authorization);
            AsyncStorage.setItem(userStorageKey, JSON.stringify(data.user));
        })
    }

    async function login(openid: string, email: string) {
        let res = await reqLogin(openid, email)

        return res
    }

    async function signOut() {
        setUser({} as User);
        await AsyncStorage.removeItem(userStorageKey);
        await AsyncStorage.removeItem('Authorization');
    }


    useEffect(() => {
        async function loadUserStorageDate() {
            const userStoraged = await AsyncStorage.getItem(userStorageKey);

            if (userStoraged) {
                const userLogged = JSON.parse(userStoraged) as User;
                setUser(userLogged);
            }

            setUserStorageLoading(false);
        }

        loadUserStorageDate();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            register,
            signOut,
            userStorageLoading,
        }}>
            {children}
        </AuthContext.Provider>
    )

}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }

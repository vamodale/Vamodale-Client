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
  signInWithGoogle(): Promise<void>
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

function AuthProvider({ children }: AuthProviderProps ){
  const  [user, setUser ] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  const userStorageKey = '@vamodale:user';


  async function signInWithGoogle() {
    try {
      const CLIENT_ID = '211756700388-qm7uttmhm81cs8f24ptgkhqodb5n53lk.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@nagutao/letsmove';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      // const {type, params} = await AuthSession
      // .startAsync({ authUrl }) as AuthorizationResponse

      // console.log(type);
      if (1) {
        // const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        // const userInfo = await response.json();

        const userLogged = {
          id: "1",
          name: "guilherme",
          nickname: "gui",
          email: "teste@teste.com",
          photo: "https://ensina.rtp.pt/site-uploads/2021/01/SAPO-855x480.jpg",
          city: "Braganca"
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

        await login( userLogged.id, userLogged.email ).then( async res => {
          if (res == 400) {
            await cadastro( userLogged )
          }
          else {
            await AsyncStorage.setItem('Authorization', res.Authorization);
          }
        } )
      
        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }

    } catch (error) {
      throw new Error(error);
    }
  }

  async function cadastro(user) {
    let userBody = {
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      openid: user.id,
      profile_picture: user.photo,
      city: user.city
    }
    
    await reqCadastro( userBody ).then(token=>{
      console.log(token)
      AsyncStorage.setItem('Authorization', token.Authorization);
    })
  }

  async function login( openid, email ) {
    let res = await reqLogin( openid, email )
    
    return res
  }

  async function signOut(){
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
    await AsyncStorage.removeItem('Authorization');
  }


  useEffect(() => {
    async function loadUserStorageDate() {
      const userStoraged = await AsyncStorage.getItem(userStorageKey);
      
      if(userStoraged){
        const userLogged = JSON.parse(userStoraged) as User;
        setUser(userLogged);
      }

      setUserStorageLoading(false);
    }

    loadUserStorageDate();
  },[]);

  return(
    <AuthContext.Provider value={{ 
      user, 
      signInWithGoogle,
      signOut,
      userStorageLoading,
    }}>
      { children }
    </AuthContext.Provider>
  )

}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }

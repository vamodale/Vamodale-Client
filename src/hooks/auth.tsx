import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as AuthSession from 'expo-auth-session';

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
  idade: number;
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
      const CLIENT_ID = '95332184828-r8rlcb30ipfbf6udg2t0euq5rd9mdi6s.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@kastango/VAMODALE';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const {type, params} = await AuthSession
      .startAsync({ authUrl }) as AuthorizationResponse

      console.log(type);
      if (type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo = await response.json();

        const userLogged = {
          id: userInfo.id,
          name: userInfo.name,
          nickname: userInfo.given_name,
          email: userInfo.email,
          photo: userInfo.picture,
          city: "Dois Vizinhos",
          idade: 0,
        };

        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }

    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut(){
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
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
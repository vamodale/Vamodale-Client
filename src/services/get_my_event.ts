import AsyncStorage from '@react-native-async-storage/async-storage'
import api from './api'

export async function get_my_events(){
    const auth = await AsyncStorage.getItem('Authorization')
    let data = await api.get(`users/events`, {
        headers: {
            'Authorization': auth
        }
    }).then( (res) => {
        if ( res.status === 200 ) return res.data
    } ).catch(erro=>console.log(erro))
    return data
}

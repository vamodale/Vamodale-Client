import AsyncStorage from '@react-native-async-storage/async-storage'
import api from './api'

export async function get_events( eventId = ''){
    const auth = await AsyncStorage.getItem('Authorization')
    let data = await api.get(`events/${eventId}`, {
        headers: {
            'Authorization': auth
        }
    }).then( (res) => {
        if ( res.status === 200 ) return res.data
    } ).catch(erro=>console.log(erro))
    return data
}

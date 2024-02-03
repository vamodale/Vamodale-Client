import AsyncStorage from '@react-native-async-storage/async-storage'
import api from './api'

export async function get_events( eventId = '', ltd="", lng=""){
    const auth = await AsyncStorage.getItem('Authorization')
    var params = null
    if (ltd && lng) {
        params = {
            lat: ltd,
            lng: lng
        }
    }
    let data = await api.get(`events/${eventId}`, {
        headers: {
            'Authorization': auth
        },
        params: params
    }).then( (res) => {
        if ( res.status === 200 ) {
            if (res.data.error) {
                return []
            }
            return res.data
        }
    } ).catch(erro=>console.log(erro))
    return data
}

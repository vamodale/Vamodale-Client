import AsyncStorage from '@react-native-async-storage/async-storage'
import api from './api'

export async function get_notifications() {
    const auth = await AsyncStorage.getItem('Authorization')
    let data = await api.get('/users/invites', {
        headers: {
            'Authorization': auth
        }
    }).then( (res) => {

        console.log(res)

        if ( res.status === 200 ) return res.data
    } ).catch(erro=>console.log(erro))

    return data
}
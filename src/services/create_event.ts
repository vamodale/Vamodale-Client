import AsyncStorage from '@react-native-async-storage/async-storage'
import api from './api'

const sports = {
    soccer: 1,
    futsal: 2,
    volleyball: 3,
    basketball: 4,
    handball: 5,
    other: -1,
}
const userStorageKey = '@vamodale:user';

export async function create_event( event: any, type: any ){
    event.sport = sports[event.sport]
    event.type = type
    const auth = await AsyncStorage.getItem('Authorization')
    const userLogged = await AsyncStorage.getItem(userStorageKey)
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${event.street + "," + event.number}&components=locality:${userLogged.city}|country:PT&key=AIzaSyCcd5CQ9O5r5Bv9ifk8P_TPIWmdUS8KQCU`, {
        mode: 'cors'
    });
    const retorno = await response.json();

    event.lat = retorno.results[0].geometry.location.lat
    event.lng = retorno.results[0].geometry.location.lng
    event.city = "braganca"
    let data = await api.post(`events/`, event, {
        headers: {
            'Authorization': auth
        }
    }).then( (res) => {
        if ( res.status === 200 ) return res.data
    } ).catch(erro=>console.log(erro.response))
    return data
}

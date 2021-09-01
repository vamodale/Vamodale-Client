import api from './api'

export async function get_events( eventId = ''){
    let data = await api.get(`events/${eventId}`).then( (res) => {
        if ( res.status === 200 ) return res.data
    } ).catch(erro=>console.log(erro))
    return data
}

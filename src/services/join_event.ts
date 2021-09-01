import api from './api'

export async function join_event( eventId : any ){
    let data = await api.post(`events/${eventId}/users`).then( (res) => {
        if ( res.status === 200 ) return res.data
    } ).catch(erro=>console.log(erro))
    return data
}

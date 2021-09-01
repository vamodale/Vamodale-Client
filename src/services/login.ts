import api from './api'

export async function reqLogin( openid, email ){
    const body = {
        'openid': openid,
        'email': email
    }
    return await api.get(`auth/login`, {
            params: body
        }).then( (res) => {
        if ( res.status === 200 ) return res.data
    } ).catch(erro=>{
        if ( erro.response.status == 400 ) return erro.response.status
    })
}

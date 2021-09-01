import api from './api'

export async function reqCadastro( user ){
    let data = await api.post(`users/`, user).then( (res) => {
        if ( res.status === 200 ) return res.data
    } ).catch(erro=>console.log(erro.response))
    return data
}

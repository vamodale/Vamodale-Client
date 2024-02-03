import api from './api'

export async function reqLogin(openid, email) {

    const body = {
        'openid': openid,
        'email': email
    }
    return await api.post('auth/login', body).then((res) => {
        console.log(res)
        if (res.status === 200) return res.data
    }).catch(erro => {
        console.log(erro)
        if (erro.response.status == 400) return erro.response.status
    })
}
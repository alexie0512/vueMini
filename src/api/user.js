import axios from './http'

const user={
    signIn(params){
        return axios.post('/hogwartsuser/login_post', params)
    },
    signUp(params){
        return axios.post('/hogwartsuser/register',params)
    }
}
export default user
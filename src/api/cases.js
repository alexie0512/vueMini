import axios from './http'

const cases={
    createCasesbyText(params){
        return axios.post('/case/addbytext', params)
    },

    createCasesbyFile(params){
        return axios.post('/case/addbyfile', params)
    },

    getCases(params){
        return axios.get('/case/getList',{
            methods:'post',
            data:params,
            header:{'Content-type':'mutlipart/form-data'}
        })
    }
}
export default cases
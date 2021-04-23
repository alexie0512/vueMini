import axios from './http'

const cases={
    createCasesbyText(params){
        return axios.post('/case/text', params)
    },

    createCasesbyFile(params){
        return axios.post('/case/file', params)
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
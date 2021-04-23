import axios from './http'

const cases={
    createCasesbyText(params){
        return axios.post('/hogwartsuser/text', params)
    },

    createCasesbyFile(params){
        return axios.post('/hogwartsuser/file', params)
    },

    getCases(params){
        return axios.get('/hogwartsuser/getTestCaseList',params)
    }
}
export default cases
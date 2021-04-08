import axios from './http'

const cases={
    createCases(params){
        return axios.post('/hogwartsuser/createCases', params)
    },

    getCases(params){
        return axios.get('/hogwartsuser/getTestCaseList',params)
    }
}
export default cases
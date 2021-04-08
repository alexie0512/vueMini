import axios from 'axios'

var instance= axios.create({
    hearders:{
        'Content-Type':'application/json'
    },
    baseURL:'http://10.47.49.219:8081'
})

//request拦截器
instance.interceptors.request.use(config=>{
    if(localStorage.getItem('token')){
        config.hearders.common['token']=localStorage.getItem('token')
    }
    return config
})

export default instance
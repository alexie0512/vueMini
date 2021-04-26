import axios from 'axios'

var instance= axios.create({
    headers:{
        'Content-Type':'application/json'
    },
    baseURL:'http://192.168.50.66:8080'
})

//request拦截器
instance.interceptors.request.use(
    config=>{
    if(localStorage.token){ //判断是否存在token,如果存在的话，则每个http header都加上token
        config.headers.common['token']=localStorage.token
    }
    return config
},
err=>{
    return Promise.reject(err);
}
)

export default instance
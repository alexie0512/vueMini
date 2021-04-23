<template>
    <div class="login-form">
        <h1>Login Here!! 😄</h1>
        <v-text-field v-model="username" label="Username"></v-text-field>
        <v-text-field v-model="pwd" label="Password" type="password"></v-text-field>
        <v-btn color="primary" dark @click="logIn()"> Sign In</v-btn>
        <v-btn color="primary" text @click="signUp()"> Sign Up</v-btn>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            pwd:''
        }
    },
    methods:{
        signUp(){
            console.log("signup123")   //调试用
            this.$router.push({name:'SignUp'})

        },
        logIn(){
            let post_data={
                username:this.username,
                pwd:this.pwd
            }
            console.log("signIN 接口")   //调试用
            this.$api.user.signIn(post_data).then(res=>{
                console.log(res)
                //localStorage.setItem('token',res.data.data.token) //将接口返回的token存储到本地
                //localStorage.setItem('username',this.username) //将用户名存储到本地

                this.$router.push({name:'Case'})
            })
        }
    }
}
</script>


<style scoped>
.login-form{
    width:500px;
    margin: 0 auto;
    text-align: center;
}

</style>
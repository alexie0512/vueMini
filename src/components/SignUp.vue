<template>
    <div class="sign-up">
        <h1>SignUp here~~ 😂 </h1>
        <v-text-field v-model="username" label="username"></v-text-field>
        <v-text-field v-model="pwd" label="password" type="password"></v-text-field>
        <v-text-field v-model="email" label="email"></v-text-field>
        <v-btn color="primary" @click="register()"> Sign Up</v-btn>
        <v-btn color="primary" text @click="signIn()"> Return to login page</v-btn>
    </div>
</template>



<script>
export default {
    data(){
        return{
            username:'',
            pwd:'',
            email:''
        }

    },
    methods:{
        signIn(){
            console.log("signIn321")   //调试用
            this.$router.push({name:'SignIn'})
        },
        register(){
            console.log("register321")   //调试用
            let post_data={
                userName: this.username,
                password: this.pwd,
                email: this.email
            }
            this.$api.user.signUp(post_data).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>



<style scoped>
.sign-up{
    width:500px;
    margin: 0 auto;
    text-align: center;
}

</style>
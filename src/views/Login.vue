<template>
    <form class = "login">
        <label class = "words">Email: 
        <input name = "email" class = "area" type = "email" v-model="email"/>
        </label>
        <br/>
        <label class = "words">Password: 
        <input name = "password" class = "area" type = "password" v-model="password"/>
        </label>
        <br/> 
        <input type = "submit" class = "submit" value = "登入" @click="getData(email, password)"/>
    </form>
</template>
<script>
import { login } from '../main.js';
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods:{
        getData: function getData(email, password){
            console.log(login(email, password));
            this.$router.push('/Body');
            // console.log(email, password);
        }
    }
}
</script>

<style scoped>
    .words{
        font-weight: bold;
        color: #2c3e50;
    }
    .login{
        text-align: center;
    }
    .submit{
        background-color: rgb(38, 171, 26); /* Green */
        margin: 10px;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>
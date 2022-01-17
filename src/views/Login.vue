<template>
    <form class="login needs-validation" action="#"  @submit.prevent="submit" novalidate>
        <div class="form-floating mb-3 in">
            <input class="form-control" type="email" placeholder="name@example.com" v-model="email" required/>
            <label for="floatingInput">Email address</label>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter correct Email</div>
        </div>
        <div class="form-floating mb-3 in">
            <input class="form-control" type="password" placeholder="password" v-model="password" required/>
            <label for="floatingInput">Password</label>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter correct password</div>
        </div>
        <br/>
        <button type="submit" class="btn btn-outline-primary" value="登入" @click="getData(email, password)"></button>
    </form>
</template>
<script>
import { login } from '../firebase.js';
export default {
    data() {
        return {
            email: "",
            password: "",
            show: true
        };
    },
    methods:{
        getData: async function getData(email, password){
            console.log(email, password);
            login(email, password)
            // .then(() => {
            //     console.log('login success');
            // }).catch((e)=>{
            //     console.log(e);
            // })
        },
        // check: function check(email, password){
        //     'use strict'

        //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
        //     let forms=document.querySelectorAll('.needs-validation');
        //     let currect=1;
        //     let _getData=this.getData;
        //     // Loop over them and prevent submission
        //     Array.prototype.slice.call(forms)
        //         .forEach(function (form) {
        //         form.addEventListener('submit', (event) => {
        //             if (!form.checkValidity()) {
        //                 currect=0;
        //                 event.preventDefault()
        //                 event.stopPropagation()
        //             }

        //             form.classList.add('was-validated')
        //         }, false)
        //         if(currect){
        //             console.log(email, password);
        //             _getData(email, password);
        //         }
        //     })
        // }
    }
}
</script>

<style scoped>
    .in{
        width: 300px;
        height:auto; 
        margin:0px auto; 
        /* border: solid; */
        border-radius: 6px;
    }
    .words{
        font-weight: bold;
        color: #2c3e50;
    }
    .login{
        text-align: center;
    }
    /* .submit{
        background-color: rgb(38, 171, 26);
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
    } */
    .btn-outline-primary{
        margin: 10px;
        border-color: green;
        color: black;
        padding: 10px 20px;
        text-align: center;
        font-size: 17px;
        border-radius: 10px;
    }
    .btn-outline-primary:hover{
        background-color: greenyellow;
    }
</style>
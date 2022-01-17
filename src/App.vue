<template>
  <div id="nav">
    <router-link to="/">首頁</router-link> |
    <span v-if="isLogin">
      <router-link to="/body">你的購物清單</router-link> |
      <router-link to="/" @click="userLogOut()">登出</router-link>
    </span>
    <span v-else>
      <router-link to="/login" @click="show = register">登入</router-link> | 
      <router-link to="/register" @click="show = login">註冊</router-link>
    </span>
  </div>
  <!-- <transition :name="transitionName">
    <router-view class="view"></router-view>
  </transition> -->
  <router-view></router-view>
</template>
<script>
import { onAuthStateChanged } from '@firebase/auth';
import { logout, auth } from './firebase';

  export default{
    data(){
      return {
        show: 'login',
        isLogin: false,
      };
    },
    mounted(){
      onAuthStateChanged(auth, (user) => {
        if(user){
          this.isLogin = true;
          console.log('APP', user)
        }
      });
    },
    methods: {
      userLogOut: function (){
        logout();
        this.isLogin= false;
      }
    }
    // beforeRouteUpdate (to, from, next) {
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    //   next()
    // },
  };
</script>

<style>
  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: black;
  } */
  #nav {
    padding: 30px;
    text-align: center;
    font-size: 20px;
  }

  #nav a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  /* .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  } */
  /* .fade-enter-active, .fade-leave-active {
    transition: opacity .75s ease;
  } */
  /* .fade-enter, .fade-leave-active {
    opacity: 0;
  } */
  /* .child-view {
    position: absolute;
    transition: all .75s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  } */
  
  .fade-enter-from, .fade-leave-to{
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }
  .fade-enter-to, .fade-leave-from{
    opacity: 1;
  }
</style>

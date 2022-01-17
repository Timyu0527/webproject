<template>
    <nav class="navbar navbar-expand-lg navbar-dark"  style="background-color: #2c3e50;">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <img src="./assets/cart-59-512.png" alt="" width="30" height="30" class="d-inline-block align-text-top">
            <span class="d-inline-flex">
              <router-link to="/">
                <a class="nav-link" href="#">
                  首頁
                </a>
              </router-link>
            </span>
            <span class="d-inline-flex"  v-if="isLogin">
              <router-link to="/body">
                <a class="nav-link" href="#">
                  你的購物清單
                </a>
              </router-link>
              <span v-if="isLogin" class="nav-link">{{ username }}</span>
              <router-link to="/" @click="userLogOut()">
                <a class="nav-link" href="#">
                  登出
                </a>
              </router-link>
            </span>
            <span class="d-inline-flex" v-else>
              <router-link to="/login" @click="show = register">
                <a class="nav-link" href="#">
                  登入
                </a>
              </router-link>
              <router-link to="/register" @click="show = login">
                <a class="nav-link" href="#">
                  註冊
                </a>
              </router-link>
            </span>
          </ul>
        </div>
      </div>
    </nav>
  <router-view/>
</template>
<script>
import { onAuthStateChanged } from '@firebase/auth';
import { logout, auth } from './firebase';

  export default{
    data(){
      return {
        username: "",
        show: 'login',
        isLogin: false,
      };
    },
    mounted(){
      onAuthStateChanged(auth, async (user) => {
        // let username = await getUserName();
        if(user){
          this.isLogin = true;
          this.username = user.displayName;
          // console.log(username);
          // while(!this.username){
            // this.username = auth.currentUser.displayName;
            console.log('APP', auth.currentUser.displayName);
          // }
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
  /* .nav-link.username{
    float: left;
  } */
  .link{
    text-decoration: none;
  }
  #nav {
    padding: 30px;
    text-align: center;
    font-size: 20px;
  }

  .d-inline-flex a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
  }

  .d-inline-flex a.router-link-exact-active {
    color: #42b983;
    /* color: #white; */
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

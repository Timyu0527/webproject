<template>
  <nav class="navbar navbar-expand-lg navbar-dark"  style="background-color: #2c3e50;">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <img src="./assets/cart-59-512.png" alt="Shoplist" width="35" height="35" class="d-inline-block align-text-top">
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
            <router-link to="/" @click="userLogOut()">
              <a class="nav-link" href="#">
                登出
              </a>
            </router-link>
            <span v-if="isLogin" class="nav-link">{{ username }}</span>
          </span>
          <span class="d-inline-flex" v-else>
            <router-link to="/login"  @click="show = register">
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
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>
<script>
import { onAuthStateChanged } from "@firebase/auth";
import { logout, auth } from "./firebase";

export default{
  data(){
    return {
      username: "",
      show: 'login',
      isLogin: false,
    };
  },
  updated(){
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
    userLogOut: function () {
      logout();
      this.isLogin = false;
    },
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.Container {
  margin-top: 100px;
}
.link {
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
}
</style>

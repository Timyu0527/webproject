<template>
  <div id="nav">
    <router-link to="/">首頁</router-link> |
    <router-link to="/body">你的購物清單</router-link>
  </div>
  <router-view/>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>

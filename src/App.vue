<template>
  <div class = "container">
    <Header title = "Hello"/>
    <Items :items = "items"/>
  </div>
</template>

<script>
import Header from "./components/Header"
import Items from "./components/Items"

export default {
  name: 'App',
  components: {
    Header,
    Items,
  },
  data(){
    return {
      items: []
    }
  },
  created(){
    this.items = [
      {
        id: 1,
        shop: "welcome",
        date: "2022/1/2"
      },
      {
        id: 2,
        shop: "jaklsdf",
        date: "2022/1/2"
      },
      {
        id: 3,
        shop: "jaklsdf",
        date: "2022/1/2"
      },
    ]
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
body {
  margin-top: 60px;
  font-family: 'Poppins', sans-serif;
}
.container{
  width: 80%;
  /* margin: 30px; */
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  min-height: 100%;
  border: 3px solid seagreen;
  padding: 30px;
  padding-top: 10px;
  border-radius: 10px;
}
</style>


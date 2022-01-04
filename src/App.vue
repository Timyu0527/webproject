<template>
  <div class = "container">
    <Header title = "Hello"/>
    <div class = "dataIn">
      <DataIn text = "SHOP"/> 
      <!-- adfsadf<input type = "text"/> -->
    </div>
    <Items :items = "items"/>
  </div>
</template>

<script>
import Header from "./components/Header"
import Items from "./components/Items"
import DataIn from "./components/DataIn"

export default {
  name: 'App',
  components: {
    Header,
    Items,
    DataIn,
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
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  min-height: 100%;
  border: 3px solid seagreen;
  padding: 30px;
  padding-top: 10px;
  border-radius: 10px;
}
.dataIn{
  display: block;
  margin: 0px 0px 20px 0px;
  /* padding: 100px; */
}
</style>


<template>
  <div class="container">
    <h1>
      Hello
      <button @click="add(shop_data)">add</button>
    </h1>
    <div class="dataIn">
      <label> <b>SHOP:</b><input v-model="shop_data" /> </label>
    </div>
    <div :key="item.id" v-for="(item, index) in items">
      <div class="item">
        <h4>
          {{ item.shop }}
          <i @click="onDelete(index)" class="fas fa-times"></i>
        </h4>
        <p>{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        {
          id: 1,
          shop: "welcome",
          date: "2022/1/2",
        },
        {
          id: 2,
          shop: "to",
          date: "2022/1/2",
        },
        {
          id: 3,
          shop: "die",
          date: "2022/1/2",
        },
      ],
      shop_data: "",
    };
  },
  methods: {
    add: function add(data) {
      Date.prototype.toJSONLocal = function () {
        function addZ(n) {
          return (n < 10 ? "0" : "") + n;
        }
        return (
          this.getFullYear() +
          "-" +
          addZ(this.getMonth() + 1) +
          "-" +
          addZ(this.getDate())
        );
      };
      let currentDateWithFormat = new Date().toJSONLocal(8).slice(0,10).replace(/-/g,'/');
      this.items.push({
        id: Date.now(),
        shop: data,
        date: currentDateWithFormat,
      });
    },

    onDelete: function onDelete(id) {
      this.items.splice(id, 1);
    },
  },
};
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
  font-family: "Poppins", sans-serif;
}
.container {
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
.dataIn {
  display: block;
  margin: 0px 0px 20px 0px;
  /* padding: 100px; */
}
.fas {
  color: red;
  float: right;
}
.item {
  background: #f4f4f4;
  margin: 5px;
  padding: 8px 20px;
  cursor: pointer;
  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: green;
}
</style>
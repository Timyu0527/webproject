<template>
  <div class="Container">
    <h1>
      購物車
    </h1>
    <div class="dataIn">
      <button @click="clear()" class="btn btn-danger pos">清空</button>
      <form action="#" @submit.prevent="add({shop_data, goods_data, count_data, price_data, completed})">
        <button type="submit" class="btn btn-success pos">新增</button>
        <label class="content"><b>店家: </b><input class="area" v-model="shop_data" /></label>
        <label class="content"><b>商品: </b><input class="area" v-model="goods_data" /></label>
        <label class="content"><b>數量: </b><input class="area" v-model="count_data" type="number" min="1"/></label>
        <label class="content"><b>價格: </b><input class="area" v-model="price_data" type="number" min="1"/></label>
      </form>
      <div class="price">
        <span></span>
        <span>合計: {{ total_price }} NTD</span>
      </div>
    </div>
    <div :key="item.id" v-for="(item, index) in items">
      <div class="item">
          <i @click="onDelete(index)" class="fas fa-times"></i>
          <label class="checkContainer">
            <!-- <span v-if="item.completed==true"> -->
              <!-- <input type = "checkbox" checked v-model="item.completed" :id="item.id" @click="change(index)"> -->
            <!-- </span> -->
            <!-- <span v-else> -->
              <input type="checkbox" v-model="item.completed" :id="item.id" @click="change(index)">
            <!-- </span> -->
            <span class="checkmark"></span>
          </label>
          <!-- <transition name="show">
            <p v-if="fade"> -->
              <label :class="{'do': item.completed}" class="font-monospace" :for="item.id">
                <h3 class="shop">店家: {{ item.shop_data }}</h3>
                <p class="">商品: {{ item.goods_data }}</p>
                <p>數量: {{ item.count_data }}</p>
                <p>價格: {{ item.price_data}}</p>
              </label>
            <!-- </p>
          </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../firebase.js'
// import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore/lite';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore/lite';
export default {
  name: "App",
  data() {
    return {
      items: [],
      shop_data: "",
      goods_data: "",
      count_data: "",
      price_data: "",
      created_data: "",
      total_price: 0,
      completed: false,
    };
  },
  mounted(){
    getDoc(doc(db, 'shopCart', auth.currentUser.uid)).then((data) => {
      if(data.data().all_goods){
        this.items = data.data().all_goods;
      }
      // console.log(data.data().all_goods);
      for(let value of this.items){
        this.total_price += (value.price_data * value.count_data);
      }
      // console.log(this.items);
    });
  },
  methods: {
    change: function (id){
      console.log(this.items);
      let data = this.items[id]
      console.log(data)
      updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
        all_goods: arrayRemove(data)
      }).then(() => {
        updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
          all_goods: arrayUnion(data)
        });
      });
      // console.log('adfasd');
    },
    add: function (data) {
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
      if(data.shop_data == "" ||
         data.goods_data == "" ||
         (!isFinite(data.count_data) && parseInt(data.count_data) > 0) ||
         (!isFinite(data.price_data) && parseInt(data.price_data) > 0)){
        alert("無效的輸入");
        return;
      }
      // let currentDateWithFormat = new Date().toJSONLocal(8).slice(0,10).replace(/-/g,'/');
      this.items.unshift({
        id: Date.now(),
        shop_data: data.shop_data,
        // goods: currentDateWithFormat,
        goods_data: data.goods_data,
        count_data: data.count_data,
        price_data: data.price_data,
        completed: data.completed,
      });
      updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
        all_goods: arrayUnion(data)
      });
      this.goods_data = "";
      this.shop_data = "";
      this.count_data = "";
      this.price_data = "";
      this.total_price += data.price_data * data.count_data;
    },
    onDelete: function (id) {
      this.total_price -= parseInt(this.items[id].price_data * this.items[id].count_data);
      updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
        all_goods: arrayRemove(this.items[id])
      });
      this.items.splice(id, 1);
    },
    clear: function (){
      this.items = [];
      updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
        all_goods: []
      });
      this.total_price = 0;
    }
  },
};
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
body {
  margin-bottom: 60px;
  font-family: "Poppins", sans-serif;
  /* font-weight: bold; */
  color: #2c3e50;
}
.do{
  text-decoration: line-through;
}
h3.shop{
  margin-top: 30px;
}
.Container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  min-height: 100%;
  border: 3px solid seagreen;
  padding: 30px;
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
  /* display: block; */
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 10px 1px 10px;
  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: green;
  border-radius: 6px;
}
.checkContainer{
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  width: 0px;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checkContainer input{
  position: absolute;
  /* left: 0px;
  top: 0px; */
  opacity: 0;
  cursor: pointer;
  height: 10;
  width: 10;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #aaa;
  border-radius: 4px;
}
.checkContainer:hover input ~ .checkmark {
  /* background-color: #2196F3; */
  background-color: #ccc;
}
.checkContainer input:checked ~ .checkmark  {
  background-color: #40aa0f;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkContainer input:checked ~ .checkmark:after {
  display: block;
}
.checkContainer .checkmark:after {
  left: 7px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* .button {
  float: right;
  margin-top: 0px;
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
.content{
  margin: 5px;
}
.area{
  /* width: 100%; */
  padding: 6px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.pos{
  float: right;
  margin:10px;
}
.price{
  /* align-self: right; */
  /* text-align: right; */
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  padding: 5px 15px;
  font-size: 18px;
  color: #212121;
  margin-bottom: 20px;
}
</style>
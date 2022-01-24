<template>
  <div class="Container">
    <h1>
      購物車
    </h1>
    <div class="Form">
      <button @click="clear()" class="btn btn-danger pos">清空</button>
      <form action="#" @submit.prevent="add({shop_data, goods_data, count_data, price_data, completed})">
        <button type="submit" class="btn btn-success pos">新增</button>
        <label class="field"><b>店家: </b><input class="content" v-model="shop_data" /></label>
        <label class="field"><b>商品: </b><input class="content" v-model="goods_data" /></label>
        <label class="field"><b>數量: </b><input class="content" v-model="count_data" type="number" min="1"/></label>
        <label class="field"><b>價格: </b><input class="content" v-model="price_data" type="number" min="1"/></label>
      </form>
      <div class="price">
        <span></span>
        <span>合計: {{ total_price }} NTD</span>
      </div>
    </div>
    <div :key="item.id" v-for="(item, index) in items.goods">
      <div class="item">
          <i @click="onDelete(index)" class="fas fa-times"></i>
          <label class="checkContainer">
              <input type="checkbox" v-model="item.completed" :id="item.id" @click="change(index)">
            <span class="checkmark"></span>
          </label>
          <label :class="{'do': item.completed}" class="font-monospace" :for="item.id">
            <h3 class="shop">店家: {{ item.shop_data }}</h3>
            <p class="">商品: {{ item.goods_data }}</p>
            <p>數量: {{ item.count_data }}</p>
            <p>價格: {{ item.price_data}}</p>
          </label>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../firebase.js'
// import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore/lite';
import { arrayRemove, doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore/lite';
export default {
  name: "App",
  props: ['listId'],
  data() {
    return {
      items: [],
      lists: [],
      shop_data: "",
      goods_data: "",
      count_data: "",
      price_data: "",
      total_price: 0,
      completed: false,
    };
  },
  mounted(){
    // console.log(this.listId);
    getDoc(doc(db, 'shopCart', auth.currentUser.uid)).then((data) => {
      if(data.data().lists[this.listId]){
        this.items = data.data().lists[this.listId];
        this.lists = data.data().lists;
      }
      // console.log(data.data().all_goods);
      // console.log(this.items);
      for(let value of this.items.goods){
        this.total_price += (value.price_data * value.count_data);
      }
    });
  },
  methods: {
    change: function (id){
      // console.log(this.items.goods);
      this.lists[this.listId].goods = this.items.goods;
      let data = this.lists[this.listId]
      // console.log('data =>', data);
      updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
        lists: arrayRemove(data)
      }).then(() => {
        updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
          lists: arrayUnion(this.lists[id])
        });
      });
      // console.log('adfasd');
    },
    add: function (data) {
      if(data.shop_data == "" ||
         data.goods_data == "" ||
         (!isFinite(data.count_data) && parseInt(data.count_data) > 0)){
        alert("無效的輸入");
        return;
      }
      this.items.goods.unshift({
        id: Date.now(),
        shop_data: data.shop_data,
        goods_data: data.goods_data,
        count_data: data.count_data,
        price_data: data.price_data,
        completed: data.completed,
      });
      this.lists[this.listId] = this.items;
      updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
        lists: this.lists
      }).then(() => {
        this.goods_data = "";
        this.shop_data = "";
        this.count_data = "";
        this.price_data = "";
        this.total_price += data.price_data * data.count_data;
      });
    },
    onDelete: function (id) {
      this.total_price -= parseInt(this.items.goods[id].price_data * this.items.goods[id].count_data);
      this.items.goods.splice(id, 1);
      this.lists[this.listId] = this.items;
      updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
        lists: this.lists
      });
    },
    clear: function (){
      this.items.goods = [];
      this.lists[this.listId] = this.items;
      updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
        lists: this.lists
      }).then(() => {
        this.total_price = 0;
      });
    }
  },
};
</script>

<style scoped>
body {
  margin-bottom: 60px;
  font-family: "Poppins", sans-serif;
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
.Form{
  display: block;
  margin: 0px 0px 20px 0px;
}
.fas {
  color: red;
  float: right;
}
.item {
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
.field{
  margin: 5px;
}
.content{
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
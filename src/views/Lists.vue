<template>
    <div class="Container">
        <h1>你的所有購物備忘錄</h1>
        <div class="Form">
            <form action="#" @submit.prevent="add({list_title})">
                <label class="field"><b>名稱: </b><input class="content" type="text" v-model="list_title"/></label>
                <button type="submit" class="btn btn-success pos">新增清單</button>
            </form>
        </div>
        <span :key="list.id" v-for="(list, index) in lists" class="item">
            <i @click="onDelete(index)" class="fas fa-times"></i>
            <router-link :to='"/lists/"+index+"/body"'>
                <p>{{ list.title }}</p>
                <p>{{ list.created }}</p>
            </router-link>
        </span>
    </div>
</template>

<script>
import { arrayUnion, doc, getDoc, updateDoc, arrayRemove } from '@firebase/firestore/lite'
import { auth, db } from '../firebase'
export default {
    data(){
        return{
            lists: [],
            created: "",
            list_title: "",
        }
    },
    mounted(){
        getDoc(doc(db, 'shopCart', auth.currentUser.uid)).then((data) => {
            this.lists = data.data().lists;
        });
    },
    methods: {
        add: function (data){
            if(this.lists.find(element => element.title == data.list_title)){
                this.list_title = "";
                alert('The title is already used!');
                return;
            }
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
            let list = {
                title: data.list_title,
                goods: [],
                created: currentDateWithFormat     
            };
            updateDoc(doc(db, 'shopCart', auth.currentUser.uid), {
                lists: arrayUnion(list)
            }).then(() => {
                this.lists.push(list);
                this.list_title = "";
            });
        },
        onDelete: function (id) {
            updateDoc(doc(db, 'shopCart', auth.currentUser.uid),{
                lists: arrayRemove(this.lists[id])
            }).then(() => {
                this.lists.splice(id, 1);
            });
        },
    }
}
</script>
<style scoped>
.Container {
  width: 90%;
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
.item{
  display: inline-block;
  background: #f4f4f4;
  width: 30%;
  margin: 5px;
  padding: 10px 10px 1px 10px;
  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: green;
  border-radius: 6px;
}
.field{
  margin: 5px;
}
.content{
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
.fas {
  color: red;
  float: right;
}
a{
  text-decoration: none;
  color: #2c3e50;
}
</style>
<template>
    <button @click = "onClick()" class = "button">{{text}}</button>
</template>

<script>

export default {
    name: "Button",
    props:{
        text: String,
    },
    methods: {
        onClick(){
            alert("click");
        },
    }
}
</script>
<style scoped>
.button {
  background-color: rgb(47, 219, 32); /* Green */
  margin: 0px;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
}
</style>
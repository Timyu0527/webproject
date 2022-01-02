<template>
    <div class = "item">
        <h4>{{item.shop}}
            <i @click = "onDelete(item.id)" class="fas fa-times"></i>
        </h4>
        <p>{{item.date}}</p>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: {
        item: Object,
    },
    methods:{
        onDelete(id){
            alert(id);
        },
    },
}
</script>

<style scoped>
.fas{
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

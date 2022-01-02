<template>
    <header>
        <h1>{{ title }}</h1>
        <Button text = "Add"/>
    </header>
</template>

<script>
import Button from "./Button.vue"
export default {
    name: "Header",
    props: {
        title: String,
    },
    components: {
        Button,
    }
}
</script>
<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px;
        padding: 0px;
        /* margin-bottom: 20px; */
    }
</style>
<template>
    <label>
        <b>{{text}}:</b><input type = "text"/>
    </label>
</template>

<script>
export default{
    name: "DataIn",
    props: {
        text: String,
    },
}
</script>

<style scoped>
/* .test{
    display:block;
    height: 10px;
    padding :10px;
} */
</style>
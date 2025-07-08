
<template>
    <div>
        <p>Ürünlerimiz</p>
    </div>

    <MyButton /> <br>
    <MyButton :title="button1" color="btn-primary"/>
    <CounterButton/>

</template>

<script setup>

    
    definePageMeta({
        middleware:"redirect",
    })

    const button1 =ref("buttonIrem")


</script>


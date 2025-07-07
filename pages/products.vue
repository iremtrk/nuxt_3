
<template>
    <div>
        <p>Ürünlerimiz</p>
    </div>

    <MyButton /> <br>
    <MyButton :title="button1" color="btn-primary"/>
    <CounterButton/>

</template>

<script setup>

    const button1 =ref("buttonIrem")

    
    const kullanici =reactive({
        isim:"İrem",
        yas:22
    })
    console.log(kullanici.isim)
    console.log(kullanici.yas)
</script>


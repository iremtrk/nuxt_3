<template>
    <div>
        <p>İletişim</p>
        <Alert/> <br> 
        <Alert color="alert1"/>
        <MyButton/>

        <p>{{ mesaj }}</p>
        <button @click="msjDegis">Mesajı değiştir</button>
    </div>
</template>

<script setup>
const mesaj=ref("deneme")

function msjDegis ()
{
    mesaj.value="yeni"
}

const alert1=ref("Alert")
</script>

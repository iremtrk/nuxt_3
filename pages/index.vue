<template>
    <div>
        <h1>Nuxt3</h1>
        <p>Ne amaçlıyoruz?</p>
        <button @click="purpose()">Öğren</button> <br> <br>
        <Alert />
    </div>
</template>

<script setup>
    function purpose(){
        alert("nuxt öğrenmeyi!")
    }
</script>


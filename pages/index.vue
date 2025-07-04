<template>
    <div>
        <h1>Nuxt3</h1>
        <p>Ne amaçlıyoruz?</p>
        <button @click="purpose">Öğren</button> <br> <br>
        <Alert />
    </div>
</template>

<script>
import Alert from '~/components/Alert.vue';

    export default{
        methods:{purpose(){
            alert('nuxt uzmanı olmak!')
        }}
    }
</script>

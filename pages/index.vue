<template>
    <div>
        <h1>Nuxt3</h1>
        <p>Ne amaçlıyoruz?</p>
        <button @click="purpose">Öğren</button>
    </div>
</template>

<script>
    export default{
        methods:{purpose(){
            alert('nuxt uzmanı olmak!')
        }}
    }
</script>

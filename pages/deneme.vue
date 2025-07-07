<template>
    <div>
        <input type="text" v-model="name" />

            <h3> {{ greeting() }}</h3> 
         <!-- <h3> {{ greeting }}</h3>     -->


        <button @click="count++">Increment : {{ count }}</button>
    </div>
</template>

<script setup>
    const count =ref(0);
    const name=ref("irem");

    function greeting(){
        console.log("greeting () was executed")
        return "Hi, " + name.value;
    }

    // const greeting = computed(() =>{
    //     console.log("greeting() was executed")
    //     return "Hi," + name.value
    // })
</script>
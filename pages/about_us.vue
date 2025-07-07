<template>
    <div>
        <p> Hakkımızda</p>
    </div>

    <CounterButton/>

    <NuxtTime :datetime="Date.now()" /> (hazır component)
    <br> <br>
    {{ deco }}

<button @click="inc">
    increment
</button> <br>

<button @click="decrement">
    deco
</button>

</template>

<script setup>

const deco=ref(0)

function inc(){
    deco.value++
}
function decrement(){
    deco.value--
}

import CounterButton from '~/components/CounterButton.vue';

onMounted(()=>{
    console.log("about sayfası yüklendi")
})

onUnmounted(()=>{
    console.log("about sayfası kaldırıldı")
})
onBeforeMount(()=>{
    console.log("Yüklenmeden önce")
})
</script>





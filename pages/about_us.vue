<template>
    <div>
        <p> Hakkımızda</p>
    </div>

    <CounterButton/>

    {{ num }}

    <button @click="increment">
        increment
    </button> |

    <button @click="decrement">
        decrement
    </button> |

    <button @click="reset">
        reset
    </button>

</template>

<script setup>

    const num=ref(0)

    function increment(){
        num.value++
    }
    function decrement(){
        num.value--
    }
    function reset(){
        num.value=0
    }



    /*onMounted(()=>{
        console.log("about sayfası yüklendi")
    })

    onUnmounted(()=>{
        console.log("about sayfası kaldırıldı")
    })
    onBeforeMount(()=>{
        console.log("Yüklenmeden önce")
    })*/
</script>





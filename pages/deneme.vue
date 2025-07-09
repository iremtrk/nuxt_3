<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/deneme2">Deneme2</NuxtLink> 

            </nav>
        </header>
        <input type="text" v-model="name" />

            <!-- <h3> {{ greeting() }}</h3>  -->
         <h3> {{ greeting }}</h3>    
         {{ counter }}

        <Event2/>


    </div>
</template>

<script setup>
const counter = useState('irem')
const name=ref("")
    // function greeting(){
    //     console.log("greeting () was executed")
    //     return "Hi, " + name.value;
    // }

    const greeting = computed(() =>{
        // console.log("greeting() was executed")
        return "Hi," + name.value
    })
</script>
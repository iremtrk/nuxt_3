<template>
    <div>
        <h1>Nuxt3</h1>
       
        {{ counter }}
        <!-- <div :class="{active: isActive, error:!isActive}">aktif</div> -->
         <div :class="activity">aktif</div>

         <!-- <p v-for="item in list" :key="item">{{ item }}</p> -->

         <ul>
             <li v-for="(value,key) in myObject">
                 {{ key }}: {{ value }}
            </li> <br> <br>

            <li v-for="(value,key) in myObject">
                {{ key }}
            </li>
         </ul>

    </div>
</template>

<script setup>


const myObject =reactive({
    title:'Nasıl liste yaparız',
    author:'İrem',
    publishedAt:'08-07-2025'
})

// const list =ref([1,2,3,4,5])

// const isActive=ref(false)
const activity=reactive({
    active:true,
    error:false
})


const counter = useState('irem', 'irem')


function purpose() {
    alert("nuxt öğrenmeyi!")
}
</script>

<style>
.active{
    color:green;
}
.error{
    color:red;
}
</style>

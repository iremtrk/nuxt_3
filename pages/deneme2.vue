<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/deneme2">Deneme2</NuxtLink> 
            </nav>
        </header>
        <h2> Ad: {{ tamAd }}</h2>

        <input type="text" v-model="ad" placeholder="Adınızı Giriniz"> <br>
        <input type="text" v-model="soyad" placeholder="Soyadınızı Giriniz">


    </div>
</template>

<script setup>
    const ad=ref("")
    const soyad=ref("")

    const tamAd=computed(()=>{
        return ad.value +" "+ soyad.value
    })
</script>
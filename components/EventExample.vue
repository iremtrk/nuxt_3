<template>
    <div @click="divTiklandi">
        <button @click.stop="butonTiklandi">Butona Tıkla</button>
        <p> 
            <a href="https://www.youtube.com" @click.prevent="linkeTiklandi">
                Bu link normalde youtube'a giderdi
            </a>  
        </p>
    </div>
</template>

<script setup>
function divTiklandi(){
    console.log("div'e tıklandı")
}

function butonTiklandi(){
    console.log("Butona Tıklandı ve event propagation durdu")
}

function linkeTiklandi(){
    console.log("Linke Tıklandı ama yönlendirilmedi")
}
</script>
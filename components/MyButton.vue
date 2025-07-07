<template>
    <div>
        <button :class="props.color">{{props.title}}</button>
    </div>
</template>

<script setup>
    const props=defineProps({
        title:{
            type:String,
            default:'Button'
        },
        color:{
            type:String,
            default:"btn"
        }
    })

</script>

<style scoped>

</style>
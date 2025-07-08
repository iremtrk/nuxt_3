<template>
    <div>
        <button :class="props.color">{{title}}</button>
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

    const title=computed(()=> props.title)

</script>

<style scoped>

</style>
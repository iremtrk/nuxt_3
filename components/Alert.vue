<template>
    <div :class="props.color">
        This is an alert component.
    </div>
</template>

<script setup>
    const props=defineProps({
        color:{
            type:String,
            default:"Alert"
        }
    })
</script>

<style scoped>
    .alert {
        color: rgb(223, 46, 176);
    }
    .alert1{
        color:purple;
    }
</style>


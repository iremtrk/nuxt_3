<script setup lang="ts">
import CounterButton from '~/components/CounterButton.vue';

</script>

<template>
    <div>
        <p> Hello</p>
    </div>

    <CounterButton/>

    <NuxtTime :datetime="Date.now()" /> (hazır component)

</template>



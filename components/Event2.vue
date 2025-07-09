<template>
	<button id="irem" @click="greet">Greet</button>
</template>

<script setup>

const name = ref('Vue.js')

function greet(event) {
  alert("hello " + name.value)
  if (event) {
    alert(event.target.tagName)
    event.target.innerHTML="asdsad"
    console.log(event)
    console.log(event.target.innerHTML)

  }
}
</script>

<script type="module" setup>
import { ref } from "vue";
let counter = ref(1);
function increase() {
  counter.value++;
}
function decrease() {
  counter.value--;
}
</script>

<template>
  <div>
    <button @click="decrease()">-</button>
    {{ counter }}
    <button @click="increase()">+</button>
  </div>
</template>

<style scoped>
button {
  border: 1px solid red;
}
</style>

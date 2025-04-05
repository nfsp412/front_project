<script type="module">
import { ref } from "vue";
export default {
  setup() {
    let counter = ref(1);
    function increase() {
      counter.value++;
    }
    function decrease() {
      counter.value--;
    }
    return {
      counter,
      increase,
      decrease,
    };
  },
};
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

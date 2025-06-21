<template>
  <div>
    <h1>list</h1>

    {{ person }}
  </div>
</template>

<script setup type="module">
import { definedPerson } from "../store/store.js";
let person = definedPerson();
</script>

<style scoped></style>

<template>
  <div>
    {{route.params.username}}
    {{route.params.password}}
  </div>
</template>

<script setup type="module">
import { useRoute } from "vue-router";
let route = useRoute()
</script>

<style scoped></style>

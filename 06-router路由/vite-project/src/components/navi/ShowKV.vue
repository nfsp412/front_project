<template>
    <div>
      {{route.query.id}}
      {{route.query.lang}}
    </div>
  </template>
  
  <script setup type="module">
  import { useRoute } from "vue-router";
  let route = useRoute()
  </script>
  
  <style scoped></style>
  
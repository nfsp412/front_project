<template>
  <div>
    {{ msg }}

    <router-view></router-view>
  </div>
</template>

<script setup type="module">
import { defineProps } from "vue";
defineProps({
  msg: String, //和 msg 名称一致
});
</script>

<style scoped></style>

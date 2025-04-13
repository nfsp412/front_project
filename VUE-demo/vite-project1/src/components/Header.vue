<template>
  <div>
    欢迎: xx <a href="#">退出登录</a><br />
    {{ navi_msg }}
  </div>
</template>

<script setup type="module">
import { defineProps } from "vue";
defineProps({
  navi_msg: String,
});
</script>

<style scoped></style>

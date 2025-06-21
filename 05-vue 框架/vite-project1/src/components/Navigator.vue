<template>
  <div>
    <ul>
      <li @click="send('查询模块')">查询模块</li>
      <li>导入模块</li>
      <li>导出模块</li>
      <li>调度模块</li>
    </ul>
  </div>
</template>

<script setup type="module">
import { defineEmits } from "vue";
const emits = defineEmits(["sendMenu"]); //和 sendMenu 保持一致

function send(data) {
  emits("sendMenu", data); //和 sendMenu 保持一致
}
</script>

<style scoped></style>

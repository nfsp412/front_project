<script setup>
import { onMounted, reactive } from "vue";
let jsonData = reactive({
  code: null,
  content: null,
});
import getMsg from "./api/index.js";
let getMessage = async () => {
  try {
    let { data } = await getMsg();
    console.log(data);
    Object.assign(jsonData, data);
  } catch (error) {
    console.log('Error: ' + error);
  }
};
onMounted(() => {
  getMessage();
});
</script>

<template>
  <div>
    <h1>
      土味情话
      <hr />
      {{ jsonData.content }}
    </h1>
    <br />
    <button @click="getMessage()">换一个</button>
  </div>
</template>

<style scoped></style>

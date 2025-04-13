<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
let jsonData = reactive({
  code: null,
  content: null,
});
let getMsg = async () => {
  try {
    return await axios({
      method: "post",
      url: "https://api.uomg.com/api/rand.qinghua?format=json",
    });
  } catch (error) {
    console.log(error);
  }
};
let getMessage = async () => {
  let { data } = await getMsg();
  console.log(data);
  Object.assign(jsonData, data);
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

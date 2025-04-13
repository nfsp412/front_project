<script setup>
import Header from "./components/Header.vue";
import Navigator from "./components/Navigator.vue";
import Content from "./components/Content.vue";

import { ref, reactive, toRefs } from "vue";

let msg = ref("App data");

const change = () => {
  msg.value = "Update!";
};

let navi_msg = ref("");
function receiver(data) {
  navi_msg.value = data;
}

/**
 * router路由
 * 两个标签 router-link router-view
 * router.js
 * app.use挂载
 * 重定向 redirect
 * 
 * 编程式路由
 */
</script>

<template>
  <div>
    <h2>{{ msg }}</h2>
    <br />
    <h2>{{ navi_msg }}</h2>
    <Header class="header" :navi_msg="navi_msg"></Header>
    <Navigator class="navigator" @sendMenu="receiver"></Navigator>
    <!-- 和 msg 名称一致 -->
    <Content class="content" :msg="msg"></Content>
    <button @click="change">更新按钮</button><br />
  </div>
</template>

<style scoped>
.header {
  height: 80px;
  border: 1px solid red;
}
.navigator {
  width: 15%;
  height: 400px;
  border: 1px blue solid;
  float: left;
}
.content {
  width: 84%;
  height: 400px;
  border: 1px goldenrod solid;
  float: right;
}
</style>

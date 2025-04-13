<template>
  <div>
    <!-- <ul>
      <li @click="send('查询模块')">查询模块</li>
      <li>导入模块</li>
      <li>导出模块</li>
      <li>调度模块</li>
    </ul> -->

    <router-link to="/query" @click="send('查询模块')">查询模块</router-link
    ><br />
    <router-link to="/import">导入模块</router-link><br />
    <router-link to="/export">导出模块</router-link><br />
    <router-link to="/schedule">调度模块</router-link><br />

    <button @click="toQuery()">查询模块(编程式路由)</button><br />

    <router-link to="/showDetail/zs/123"
      >路由传参-路径参数-声明式路由</router-link
    ><br />

    <button @click="showDetail('ls', '456')">
      路由传参-路径参数-编程式路由
    </button>
  </div>
</template>

<script setup type="module">
import { defineEmits } from "vue";
const emits = defineEmits(["sendMenu"]); //和 sendMenu 保持一致

function send(data) {
  emits("sendMenu", data); //和 sendMenu 保持一致
}

//编程式路由
import { useRouter } from "vue-router";
import { ref } from "vue";
let router = useRouter();
let routePath = ref("");
let toQuery = () => {
  router.push({
    path: "/query",
  });
};

//路由传参 路径参数 编程式路由
import { useRoute } from "vue-router";
let showDetail = (username, password) => {
  router.push({
    name: "showDetail", //和 showDetail 保持一致
    params: {
      username: username,
      password: password,
    },
  });
};
</script>

<style scoped></style>

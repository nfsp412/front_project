<template>
  <div>
    欢迎: {{ username }} <a @click="logout">退出登录</a><br />
    {{ navi_msg }}
  </div>
</template>

<script setup type="module">
import { defineProps } from "vue";
defineProps({
  navi_msg: String,
});

//路由守卫
let username = window.localStorage.getItem("username");
import { useRouter } from "vue-router";
const router = useRouter();
const logout = () => {
  console.log("logout");
  window.localStorage.removeItem("username");
  router.push("/login");
};
</script>

<style scoped></style>

<template>
  <div>
    账号: <input type="text" v-model="username" /><br />
    密码: <input type="text" v-model="password" /><br />
    <button @click="login()">登录</button>
  </div>
</template>

<script setup type="module">
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let username = ref("");
let password = ref("");
const login = () => {
  console.log(username.value, password.value);
  if ((username.value == "root") & (password.value == "111111")) {
    router.push({
      path: "/",
      query: {
        username: username.value,
      },
    });
    window.localStorage.setItem("username", username.value);
  } else {
    alert("登录失败");
  }
};
</script>

<style scoped></style>

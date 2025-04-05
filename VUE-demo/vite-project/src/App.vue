<script type="module" setup>
import { ref } from "vue";
let counter = ref(1);
function increase() {
  counter.value++;
}
function decrease() {
  counter.value--;
}

// 插值表达式
let msg = "hello vue3";
let getMsg = () => {
  return "msg1";
};
let age = 19;
let bee = "蜜 蜂";
const carts = [
  { name: "可乐", price: 3, number: 10 },
  { name: "薯片", price: 6, number: 8 },
];
function compute() {
  let cnt = 0;
  for (let index in carts) {
    cnt += carts[index].price * carts[index].number;
  }
  return cnt;
}

// v-text和v-html
let redMsg = "<font color='red'>msg</font>";
let greenMsg = `<font color=\'green\'>${msg}</font>`;
</script>

<template>
  <div>
    <button @click="decrease()">-</button>
    {{ counter }}
    <button @click="increase()">+</button>

    <h1>{{ msg }}</h1>
    {{ getMsg() }} <br />
    {{ age >= 18 ? "true" : "false" }} <br />
    {{ bee.split(" ").reverse().join("=") }} <br />
    {{ compute() }} <br />
    {{ carts[0].price * carts[0].number }} <br />

    <span v-text="msg"></span> <br />
    <span v-text="getMsg()"></span> <br />
    <!-- 无法识别html格式 -->
    <span v-text="redMsg"></span><br />
    <span v-text="greenMsg"></span> <br />
    <span v-text="age >= 18 ? 'true' : 'false'"></span><br />
    <span v-text="bee.split(' ').reverse().join('=')"></span><br />
    <span v-html="redMsg"></span><br />
    <span v-html="greenMsg"></span><br />
  </div>
</template>

<style scoped>
button {
  border: 1px solid red;
}
</style>

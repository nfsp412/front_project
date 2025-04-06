<script type="module" setup>
import { ref, reactive, toRef, toRefs } from "vue";
let counter = ref(1);
function increase() {
  counter.value++;
}
function decrease() {
  counter.value--;
}
// vue3默认非响应式
const show = () => {
  alert(counter.value);
};

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

// v-bind渲染元素的属性
const data = {
  name: "Asuka1111",
  url: "https://github.com/nfsp412",
};

// v-on监听dom事件
let cnt = ref(0);
let add = () => {
  cnt.value++;
};
let incr = (event) => {
  cnt.value++;
  event.preventDefault();
};

// reactive关键字 ref关键字
let dt = reactive({
  c: 0,
});
const s = () => {
  alert(dt.c);
};
let a = () => {
  dt.c++;
};
let i = () => {
  dt.c--;
};

// toRefs toRef 关键字
let dt2 = reactive({
  cnt: 0,
  name: "test",
});
let ct = toRef(dt2, "cnt");
let a1 = () => {
  dt2.cnt++;
};
let i1 = () => {
  ct.value--;
};
// let {counter,names} = toRefs(dt2) //toRefs用法
</script>

<template>
  <div>
    <button @click="decrease()">-</button>
    {{ counter }}
    <button @click="increase()">+</button>
    <button @click="show()">show</button>

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

    <a v-bind:href="data.url" target="_self" @click.prevent="cnt++">URL</a
    ><br />
    <a :href="data.url" target="_self">URL</a><br />
    <input type="button" v-bind:value="`点击${data.name}`" />

    <h1>cnt值{{ cnt }}</h1>
    <button v-on:click="add()">add</button><br />
    <button @click="cnt++">add</button><br />
    <button @click.once="add()">add</button><br />
    <a href="https://github.com/nfsp412" @click.prevent="cnt++">prevent</a
    ><br />
    <a href="https://github.com/nfsp412">prevent</a><br />
    <!-- 推荐下面写法 原生js -->
    <a href="https://github.com/nfsp412" @click="incr($event)">prevent</a><br />

    <button @click="i()">-</button>
    {{ dt.c }}
    <button @click="a()">+</button>
    <br>

    <button @click="i1()">-</button>
    {{ dt2.cnt }}
    {{ ct }}
    <button @click="a1()">+</button>
    <br>
  </div>
</template>

<style scoped>
button {
  border: 1px solid red;
}
</style>

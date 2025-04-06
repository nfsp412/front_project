<script type="module" setup>
import { ref, reactive, toRef, toRefs, computed } from "vue";
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

// 条件渲染 v-if&v-else&v-show
// v-show直接修改 style="display: none;"属性 不能搭配v-else 不能直接用在template元素 在DOM渲染中保留了元素的
// v-if 惰性 真实按照条件渲染
let flg1 = ref(true);
let flg11 = () => {
  flg1.value = false;
};

// 列表渲染 v-for
let dt3 = reactive([
  { id: 1, nm: "zs" },
  { id: 2, nm: "ls" },
]);

//双向绑定 v-model 即DOM树的用户操作也会影响到响应式数据 针对表单标签的
//应用在例如input textarea select标签
let user = reactive({
  username: null,
  password: null,
  introduce: null,
  pro: null,
});
let hbs = ref([]);

//属性计算 为了避免太多逻辑直接写在模板表达式中 引入属性计算的概念
//即使用computed 将逻辑封装到该方法中,然后将返回的结果在插值表达式中进行引用展示等等
//computed方法返回的结果是一个ref 所以和普通定义的ref使用起来一样
//多个标签进行多次引用只会调用一次 (在属性值没发生改变的时候)
let cnt1 = ref(0);
let res1 = computed(() => {
  console.log("computed res1");
  return cnt1.value > 5 ? "大于5" : "小于5";
});
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
    <br />

    <button @click="i1()">-</button>
    {{ dt2.cnt }}
    {{ ct }}
    <button @click="a1()">+</button>
    <br />

    <h5 v-if="flg1">VUE3</h5>
    <h5 v-else>No</h5>
    <h5 v-show="flg1">VUE</h5>
    <button @click="flg11()">if/else</button>
    <br />

    <ul>
      <li v-for="(i, index) in dt3">{{ index }}=>{{ i.id }} {{ i.nm }}</li>
    </ul>
    <br />

    username: <input type="text" v-model="user.username" /><br />
    password: <input type="text" v-model="user.password" /><br />
    简介: <textarea v-model="user.introduce"></textarea><br />
    选项:
    <select v-model="user.pro">
      <option value="1">A</option>
      <option value="2">B</option>
    </select>
    hbs:
    <input type="checkbox" name="hbss" v-model="hbs" value="eat" />EAT
    <input type="checkbox" name="hbss" v-model="hbs" value="drink" />DRINK
    <br />
    {{ user }}
    {{ hbs }}
    <br />

    {{ res1 }} <br />
    {{ cnt1 }} <br />
    <button @click="cnt1++">btn</button> <br />
  </div>
</template>

<style scoped>
button {
  border: 1px solid red;
}
</style>

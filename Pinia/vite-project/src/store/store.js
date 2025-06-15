import { defineStore } from "pinia";

// Uncaught (in promise) TypeError: Cannot destructure property 'state' of 'options' as it is undefined.
//id属性写在{}外面
export const definedPerson = defineStore("personPinia", {
  // state是核心内容 是一个返回初始状态的函数
  state: () => {
    return {
      name: "zs",
      age: 0,
      hobbies: ["sing", "run"],
    };
  },
  //   getters等同于state的计算值
  //   推荐使用箭头函数并且传入state形参
  getters: {
    getAge: (state) => {
      return state.age;
    },
    getHobbiesCount: (state) => {
      return state.hobbies.length;
    },
  },
  //   actions相当于方法method
  // 类似于getter
  // 可以直接通过this访问
  // 可以是异步的,使用await
  actions: {
    doubleAge() {
      this.age *= 2;
    },
  },
});

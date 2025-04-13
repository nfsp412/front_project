import { defineStore } from "pinia";

// Uncaught (in promise) TypeError: Cannot destructure property 'state' of 'options' as it is undefined.
//id属性写在{}外面
export const definedPerson = defineStore("personPinia", {
  state: () => {
    return {
      name: "zs",
      age: 0,
      hobbies: ["sing", "run"],
    };
  },
  getters: {
    getAge() {
      return this.age;
    },
    getHobbiesCount() {
      return this.hobbies.length;
    },
  },
  actions: {
    doubleAge() {
      this.age *= 2;
    },
  },
});

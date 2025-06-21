<template>
  <div>
    <h1>operate</h1>

    姓名: <input type="text" v-model="person.name" /><br />
    年龄: <input type="text" v-model="person.age" /><br />
    爱好:
    <input type="checkbox" value="swim" v-model="person.hobbies" />swim
    <input type="checkbox" value="sleep" v-model="person.hobbies" />sleep <br />

    <button @click="person.doubleAge()">double</button><br />
    <button @click="person.$reset">reset</button><br />

    {{ person }}
  </div>
</template>

<script setup type="module">
import { definedPerson } from "../store/store.js";
let person = definedPerson();
</script>

<style scoped></style>

import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routers/router";

let pinia = createPinia();
let app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");

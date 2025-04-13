import { createRouter, createWebHashHistory } from "vue-router";

import Query from "../components/navi/Query.vue";
import Import from "../components/navi/Import.vue";
import Export from "../components/navi/Export.vue";
import Schedule from "../components/navi/Schedule.vue";
import Home from "../components/navi/Home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/",
      component: Home,
    },
    {
      path: "/query",
      component: Query,
    },
    
    {
      path: "/import",
      component: Import,
    },
    {
      path: "/export",
      component: Export,
    },
    {
      path: "/schedule",
      component: Schedule,
    },
  ],
});

export default router;

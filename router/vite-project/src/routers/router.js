import { createRouter, createWebHashHistory } from "vue-router";

import Query from "../components/navi/Query.vue";
import Import from "../components/navi/Import.vue";
import Export from "../components/navi/Export.vue";
import Schedule from "../components/navi/Schedule.vue";
import Home from "../components/navi/Home.vue";
import ShowDetail from "../components/navi/ShowDetail.vue";

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
      path: "/queryModule",
      redirect: "/query",
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
    {
      path: "/showDetail/:username/:password",
      component: ShowDetail,
      name: "showDetail",//和 showDetail 保持一致
    },
  ],
});

export default router;

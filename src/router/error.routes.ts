import { ROUTE_NAMES } from "@/constants";
import type { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/forbidden',
    name: ROUTE_NAMES.FORBIDDEN,
    component: () => import("@/views/Error"),
    props: {
      code: 403,
      message: 'Forbidden access'
    },
    meta: {
      layout: 'empty',
      hidden: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: ROUTE_NAMES.NOT_FOUND,
    component: () => import("@/views/Error"),
    props: {
      code: 404,
      message: 'Seems nothing could be found.'
    },
    meta: {
      layout: 'empty',
      hidden: true
    }
  }
];

export default routes;
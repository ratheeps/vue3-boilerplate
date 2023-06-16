import { ROUTE_NAMES } from "@/constants";
import type { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    name: ROUTE_NAMES.LOGIN,
    component: () => import("@/views/Login"),
    meta: {
      layout: 'empty'
    }
  }
]

export default routes;
import { ROUTE_NAMES } from "@/constants";
import { useGlobalStore } from "@/stores";
import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "./auth.routes";
import errorRoutes from "./error.routes";

const routes: any[] = [
  ...authRoutes,
  ...errorRoutes
];

export function getRoutePath(routeName: ROUTE_NAMES): string | null {
  const route = routes.find((route) => route.name === routeName);
  return route?.path || null;
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export const GUEST_ROUTES: Array<string> = [
  ROUTE_NAMES.FORBIDDEN,
  ROUTE_NAMES.NOT_FOUND,
  ROUTE_NAMES.LOGIN
];

router.beforeEach(async (to) => {
  if (typeof to.name !== "string") return;

  const globalStore = useGlobalStore();

  const isAuthenticated = !!globalStore.user;

  if (!isAuthenticated && !GUEST_ROUTES.includes(to.name)) {
    return { name: ROUTE_NAMES.LOGIN };
  }
});

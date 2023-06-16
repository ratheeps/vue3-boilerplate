import type { PrivateRoutes } from "@/router";
import type { UserType } from "@/types";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

interface StateTree {
  user?: UserType;
}

const useGlobalStore = defineStore("global", {
  state: (): StateTree => ({
    user: undefined,
  }),
  actions: {
    isActivePage(url: PrivateRoutes["url"]) {
      const route = useRoute();
      return typeof url === "object" && route.name === url.name;
    },
  },
});

export { useGlobalStore };

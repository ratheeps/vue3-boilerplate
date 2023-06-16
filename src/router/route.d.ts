import { Layout } from "./types";

declare module "vue-router" {
    interface RouteMeta {
        layout?: Layout;
    }
}

export { };

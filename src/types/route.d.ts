import { Layout } from ".";

declare module "vue-router" {
    interface RouteMeta {
        layout: Layout;
    }
}

export { };

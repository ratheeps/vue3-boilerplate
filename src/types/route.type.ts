import { ROUTE_NAMES } from "@/constants";


export type Layout = "empty" | "main";

export interface RouteList {
    name: string;
    url: { name: ROUTE_NAMES };
}
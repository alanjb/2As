import { MenuItem } from "./MenuItem";

export interface Submenu {
    key?: string;
    text: string;
    title?: string;
    items: Array<MenuItem>;
}
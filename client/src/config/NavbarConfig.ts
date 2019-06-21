import { MenuItem } from './MenuItem';
import { Submenu } from './Submenu';

export interface NavbarConfig {
  logo: {
    link: {
      href: string;
      title: string;
    };
  };
  menu: {
    items: Array<NavItem>;
    mail: {
      visible: boolean;
    };
    user: {
      help: MenuItem;
      feedback: Pick<MenuItem, Exclude<keyof MenuItem, 'href'>> & {
        visible: boolean;
      };
    };
  };
}

export type NavItem = MenuItem | Submenu;

//export function findNavItemByKey(items: Array<NavItem>, key: string): NavItem {
export function findNavItemByKey(items: Array<NavItem>, key: string) {
  // Array.find not supported in IE11 and polyfill will happen _after_ env.js is loaded -- use filter instead.
  const filteredItems = items.filter(o => o.key === key);

  // Should be one or zero.
  if (filteredItems.length > 0) {
    return filteredItems[0];
  }

  return null;
}
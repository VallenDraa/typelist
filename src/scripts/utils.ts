import { listData, TODO_LIST } from "./main.js";
export const qs = (selector: string): HTMLElement | null => {
  return document.querySelector(selector);
};

export const qsa = (selector: string): NodeListOf<Element> | null => {
  return document.querySelectorAll(selector);
};

export const uniqueID = (): string => {
  return "_" + Math.random().toString(36).substring(2, 9);
};

export const refreshTodosInHTML = (): void => {
  if (TODO_LIST) {
    TODO_LIST.innerHTML = listData.map(({ element }) => element).join(" ");
  }
};

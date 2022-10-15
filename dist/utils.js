import { listData, TODO_LIST } from "./main.js";
export const qs = (selector) => {
    return document.querySelector(selector);
};
export const qsa = (selector) => {
    return document.querySelectorAll(selector);
};
export const uniqueID = () => {
    return "_" + Math.random().toString(36).substring(2, 9);
};
export const refreshTodosInHTML = () => {
    if (TODO_LIST) {
        TODO_LIST.innerHTML = listData.map(({ element }) => element).join(" ");
    }
};

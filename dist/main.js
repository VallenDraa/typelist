import { qs, refreshTodosInHTML } from "./utils.js";
import formControllerInit from "./controller/Form/formController.js";
import todoControllerInit from "./controller/Todo/TodoContoller.js";
export const TODO_LIST = qs("#list");
export let listData = [];
export const setListData = (todos) => {
    listData = todos;
    localStorage.setItem("listData", JSON.stringify(listData));
};
window.addEventListener("load", () => {
    // check if there is an existing todos in localstorage
    const existingTodos = JSON.parse(localStorage.getItem("listData") || "[]");
    if (existingTodos.length > 0) {
        listData.push(...existingTodos);
        // Binds data to HTML
        refreshTodosInHTML();
    }
    // Initialize event listeners
    formControllerInit();
    todoControllerInit();
});

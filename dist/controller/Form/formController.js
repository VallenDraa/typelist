import { listData } from "./../../main.js";
import Todo from "../../class/todo.js";
import { qs, refreshTodosInHTML } from "../../utils.js";
const TODO_FORM = qs("#todo-form");
const TODO_FORM_TOGGLE = qs("#toggle-form-btn");
const TITLE_INPUT = qs('[name="title"]');
const CONTENT_INPUT = qs('[name="content"]');
// for toggling to do form
export default function formControllerInit() {
    TODO_FORM_TOGGLE === null || TODO_FORM_TOGGLE === void 0 ? void 0 : TODO_FORM_TOGGLE.addEventListener("click", () => {
        TODO_FORM === null || TODO_FORM === void 0 ? void 0 : TODO_FORM.classList.toggle("hidden");
    });
    TODO_FORM === null || TODO_FORM === void 0 ? void 0 : TODO_FORM.addEventListener("submit", (e) => {
        // prevent page reloading
        e.preventDefault();
        // create new list item
        const newItem = new Todo(TITLE_INPUT === null || TITLE_INPUT === void 0 ? void 0 : TITLE_INPUT.value, CONTENT_INPUT === null || CONTENT_INPUT === void 0 ? void 0 : CONTENT_INPUT.value, new Date());
        // push the new
        listData.push(newItem);
        localStorage.setItem("listData", JSON.stringify(listData));
        // Binds data to HTML
        refreshTodosInHTML();
    });
}

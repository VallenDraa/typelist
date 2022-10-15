import { listData, TODO_LIST } from "./../../main.js";
import Todo from "../../class/todo.js";
import { qs, refreshTodosInHTML } from "../../utils.js";

const TODO_FORM = qs("#todo-form");
const TODO_FORM_TOGGLE = qs("#toggle-form-btn");
const TITLE_INPUT = qs('[name="title"]') as HTMLInputElement;
const CONTENT_INPUT = qs('[name="content"]') as HTMLInputElement;

// for toggling to do form
export default function formControllerInit(): void {
  TODO_FORM_TOGGLE?.addEventListener("click", (): void => {
    TODO_FORM?.classList.toggle("hidden");
  });

  TODO_FORM?.addEventListener("submit", (e): void => {
    // prevent page reloading
    e.preventDefault();

    // create new list item
    const newItem = new Todo(
      TITLE_INPUT?.value,
      CONTENT_INPUT?.value,
      new Date()
    );

    // push the new
    listData.push(newItem);
    localStorage.setItem("listData", JSON.stringify(listData));

    // Binds data to HTML
    refreshTodosInHTML();
  });
}

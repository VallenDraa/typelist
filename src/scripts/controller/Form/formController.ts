import { qs } from "../../utils";

const TODO_FORM = qs("#todo-form");
const TODO_FORM_TOGGLE = qs("#toggle-form-btn");

// for toggling to do form
export default function todoFormInit(): void {
  TODO_FORM_TOGGLE?.addEventListener("click", (): void => {
    TODO_FORM?.classList.toggle("hidden");
  });

  TODO_FORM?.addEventListener("submit", (e): void => {
    e.preventDefault();
    console.log(e.target);
  });
}

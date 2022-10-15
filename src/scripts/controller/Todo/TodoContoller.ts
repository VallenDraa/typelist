import Todo from "../../class/todo.js";
import { listData, setListData } from "../../main.js";
import { refreshTodosInHTML } from "../../utils.js";

export default function todoControllerInit(): void {
  // handle dynamically added todos with event bubbling
  window.addEventListener("click", (e): void => {
    const target = e.target as HTMLInputElement;

    if (target.id === Todo.EventName.checkTodo) {
      // fetching the todo element and putting it inside an html temp div
      const wrapper = document.createElement("div");
      const changedTodoIdx = listData.findIndex(
        (i) => i._id === target.getAttribute("data-todo-id")
      );
      wrapper.innerHTML = listData[changedTodoIdx].element;

      // changing the html class attribute
      const todoEl = wrapper.firstElementChild;
      target.checked
        ? todoEl?.classList.replace("bg-zinc-800/30", "bg-green-500/30")
        : todoEl?.classList.replace("bg-green-500/30", "bg-zinc-800/30");
      (
        todoEl?.lastElementChild?.firstElementChild as HTMLInputElement
      ).checked = target.checked;

      target.checked
        ? todoEl?.lastElementChild?.firstElementChild?.setAttribute(
            "checked",
            "checked"
          )
        : todoEl?.lastElementChild?.firstElementChild?.removeAttribute(
            "checked"
          );

      // updating the list data
      const newList = listData;
      newList[changedTodoIdx].isDone = target.checked;
      newList[changedTodoIdx].element = todoEl?.outerHTML || "";

      // bind the new data to the html
      refreshTodosInHTML();
    }

    if (target.id === Todo.EventName.removeTodo) {
      setListData(
        listData.filter(
          (todo): Boolean => todo._id !== target?.getAttribute("data-todo-id")
        )
      );

      // bind the new data to the html
      refreshTodosInHTML();
    }
  });
}

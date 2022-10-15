import Todo from "../../class/todo.js";
import { listData, setListData } from "../../main.js";
import { refreshTodosInHTML } from "../../utils.js";
export default function todoControllerInit() {
    // handle dynamically added todos with event bubbling
    window.addEventListener("click", (e) => {
        var _a, _b, _c, _d, _e;
        const target = e.target;
        if (target.id === Todo.EventName.checkTodo) {
            // fetching the todo element and putting it inside an html temp div
            const wrapper = document.createElement("div");
            const changedTodoIdx = listData.findIndex((i) => i._id === target.getAttribute("data-todo-id"));
            wrapper.innerHTML = listData[changedTodoIdx].element;
            // changing the html class attribute
            const todoEl = wrapper.firstElementChild;
            target.checked
                ? todoEl === null || todoEl === void 0 ? void 0 : todoEl.classList.replace("bg-zinc-800/30", "bg-green-500/30")
                : todoEl === null || todoEl === void 0 ? void 0 : todoEl.classList.replace("bg-green-500/30", "bg-zinc-800/30");
            ((_a = todoEl === null || todoEl === void 0 ? void 0 : todoEl.lastElementChild) === null || _a === void 0 ? void 0 : _a.firstElementChild).checked = target.checked;
            target.checked
                ? (_c = (_b = todoEl === null || todoEl === void 0 ? void 0 : todoEl.lastElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild) === null || _c === void 0 ? void 0 : _c.setAttribute("checked", "checked")
                : (_e = (_d = todoEl === null || todoEl === void 0 ? void 0 : todoEl.lastElementChild) === null || _d === void 0 ? void 0 : _d.firstElementChild) === null || _e === void 0 ? void 0 : _e.removeAttribute("checked");
            // updating the list data
            const newList = listData;
            newList[changedTodoIdx].isDone = target.checked;
            newList[changedTodoIdx].element = (todoEl === null || todoEl === void 0 ? void 0 : todoEl.outerHTML) || "";
            // bind the new data to the html
            refreshTodosInHTML();
        }
        if (target.id === Todo.EventName.removeTodo) {
            setListData(listData.filter((todo) => todo._id !== (target === null || target === void 0 ? void 0 : target.getAttribute("data-todo-id"))));
            // bind the new data to the html
            refreshTodosInHTML();
        }
    });
}

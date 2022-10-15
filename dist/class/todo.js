import { uniqueID } from "./../utils.js";
var EventName;
(function (EventName) {
    EventName["removeTodo"] = "remove-todo";
    EventName["checkTodo"] = "check-todo";
})(EventName || (EventName = {}));
export default class Todo {
    constructor(title, content, date = new Date()) {
        this._id = uniqueID();
        this.isDone = false;
        this.element = `
      <li 
        data-todo-id="${this._id}"
        class="bg-zinc-800/30 p-3 rounded-2xl backdrop-blur-md space-y-3"
      >
        <div>
          <div>
            <h4 class="text-3xl font-extrabold text-sky-500/70 ${this.isDone ? "line-through" : ""}">${title}</h4>
            <time datetime="${date.toLocaleDateString()}" class="text-indigo-300/60 text-sm">
              ${date.toLocaleDateString()}
            </time>
          </div>
          <p class="text-zinc-100/60 pt-2  ${this.isDone ? "line-through" : ""}">
            ${content}
          </p>
        </div>
        <div class="space-x-2 flex justify-end">
          <input 
            data-todo-id="${this._id}" 
            type="checkbox" id="${Todo.EventName.checkTodo}" 
          />
          <button
            data-todo-id="${this._id}"
            id="${Todo.EventName.removeTodo}"
            type="button"
            class="py-1 px-4 text-sm transition-colors duration-200 bg-red-600 hover:bg-red-500 focus:ring-2 focus:ring-red-400 rounded-full text-zinc-100"
          >
            Remove
          </button>
        </div>
      </li>
    `;
    }
}
Todo.EventName = EventName;

import { uniqueID } from "./../utils.js";
enum EventName {
  removeTodo = "remove-todo",
  checkTodo = "check-todo",
}

export default class Todo {
  readonly _id = uniqueID();
  static readonly EventName = EventName;
  public element: string;
  public isDone = false;

  constructor(title: string, content: string, date: Date = new Date()) {
    this.element = `
      <li 
        data-todo-id="${this._id}"
        class="bg-zinc-800/30 p-3 rounded-2xl backdrop-blur-md space-y-3"
      >
        <div>
          <div>
            <h4 class="text-3xl font-extrabold text-sky-500/70 ${
              this.isDone ? "line-through" : ""
            }">${title}</h4>
            <time datetime="${date.toLocaleDateString()}" class="text-indigo-300/60 text-sm">
              ${date.toLocaleDateString()}
            </time>
          </div>
          <p class="text-zinc-100/60 pt-2  ${
            this.isDone ? "line-through" : ""
          }">
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

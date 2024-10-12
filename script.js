const todoInput = document.querySelector(".todo__input");
const todoCreateButton = document.querySelector(".todo__create__button");
const todoContainer = document.querySelector(".todo__container");

let todoItems = [];
let todoItemElements = [];

todoCreateButton.addEventListener("click", () => {
  const value = todoInput.value;
  if (value === "") {
    return;
  }

  todoItems.push({
    id: todoItems.length + 1,
    name: value,
    completed: false,
  });

  todoItemElements = todoItems.map((todoItem) => {
    return `<div class="todo__item ${
      todoItem.completed ? "todo__item--completed" : ""
    }">
          <div class="todo__item__left">
            <input type="checkbox" id="completed" name="completed" />
            <span>${todoItem.name}</span>
          </div>
          <div class="todo__item__right">
            <svg
              class="todo__delete__button"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </div>
        </div>`;
  });

  todoContainer.innerHTML = todoItemElements.join("");
});

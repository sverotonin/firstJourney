// State management
const state = {
  todos: [],
};

// DOM elements
const todoItems = document.getElementById("todoItems");
const addInput = document.getElementById("addInpt");
const addBtn = document.getElementById("addBtn");

// Core functions
function addTodo() {
  const value = addInput.value.trim();
  if (!value) return;

  state.todos.push(value);
  addInput.value = "";
  renderTodos();
}

function removeTodo(index) {
  state.todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  todoItems.innerHTML = "";

  state.todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.textContent = todo;

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "✕";
    removeBtn.onclick = () => removeTodo(index);

    li.appendChild(removeBtn);
    todoItems.appendChild(li);
  });
}

// Event bindings
addBtn.addEventListener("click", addTodo);
addInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

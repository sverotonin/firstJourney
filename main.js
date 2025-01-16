//state management
let todos = [];

const addInpt = document.querySelector("#addInpt");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

function add() {
  if (addInpt.value.trim() !== "") {
    todos = [...todos, addInpt.value.trim()];
  }

  console.log(todos);
  addInpt.value = "";

  render();
}
function render() {
  todoList.replaceChildren();
  for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement("li");
    const edit = document.createElement("button");
    const remove = document.createElement("button");
    const text = document.createElement("span");

    text.textContent = todos.at(i);
    edit.textContent = "Edit";
    remove.textContent = "Delete";
    const index = todos.indexOf(text.textContent);

    edit.onclick = () => change(index, "edit");
    remove.onclick = () => change(index, "delete");

    todoItem.append(text, edit, remove);
    todoList.appendChild(todoItem);

    console.log(todos.at(i));
  }
}

function change(index, action) {
  if (action === "delete") {
    todos.splice(index, 1);
  } else if (action === "edit") {
    addInpt.value = todos[index];
    todos.splice(index, 1);
    console.log("you are editing index: " + index);
  }
  render();
}

addBtn.addEventListener("click", add);

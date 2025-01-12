const addBtn = document.getElementById("addBtn");
const addInpt = document.getElementById("addInpt");
const todos = document.getElementById("todos");

addBtn.addEventListener("click", function () {
  if (addInpt.value) {
    const todo = document.createElement("li");
    todo.textContent = addInpt.value;
    todos.appendChild(todo);
    addInpt.value = "";
  }
});

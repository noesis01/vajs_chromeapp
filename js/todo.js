const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    
    li.appendChild(span);
    li.appendChild(button);    

    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
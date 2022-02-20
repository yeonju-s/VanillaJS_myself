const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 4 Step
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    /*
    to make 'todos' array as array in LocalStorage, We need to use JSON.stringify  
    if I just set localStorage setItem('todos', toDos), in LocalStorage, it will save as 'a, b, c'.
    but use JSON.stringify, it will save as separated string in string like '["a", "b", "c", "d"]'
    and use JSON.parse, it will devided and be array like (4) ["a", "b", "c", "d"]
    */
}
// 3 Step
function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

// 2 Step
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button")
    button.innerText = "✔️"
    button.addEventListener("click", deleteToDo)
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

// 1 step
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

// 5 Step
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}

const todoForm = document.querySelector(".todo-list__form");
const todoInput = document.querySelector(".todo-list__input");
const todoButton = document.querySelector(".todo-list__button");
const todoList = document.querySelector(".todo-list");

let arr = [];

const TODO_KEY = "todo";

function saveList(){
    localStorage.setItem(TODO_KEY, JSON.stringify(arr));
}

function liDelete(event){
    const li = event.target.parentElement;
    li.remove();
    arr = arr.filter((todo) => todo.id !== parseInt(li.id));
    saveList();
}

function paintList(newListObj){
    const li = document.createElement("li");
    li.id = newListObj.id;
    const button = document.createElement("button");
    const span = document.createElement("span");
    const BUTTON_CLASS = "li__button";

    span.innerText = newListObj.text;
    button.innerText = "✔️";
    button.classList.add(BUTTON_CLASS);
    li.appendChild(button);
    button.addEventListener("click", liDelete);
    li.appendChild(span);
    todoList.appendChild(li);
    todoInput.value = "";
}

function listAdd(event){
    event.preventDefault();
    const newList = todoInput.value;
    const newListObj = {
        text: newList,
        id: Date.now()
    };
    arr.push(newListObj);
    saveList();
    paintList(newListObj);
}

todoForm.addEventListener("submit", listAdd);

const getSaveTodo = localStorage.getItem(TODO_KEY);

if(getSaveTodo !== null){
    const leaveTodo = JSON.parse(getSaveTodo);
    arr = leaveTodo;
    leaveTodo.forEach(paintList);
}
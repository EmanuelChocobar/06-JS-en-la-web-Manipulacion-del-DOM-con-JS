//immediately invoked function expression IIFE

import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]"); //data attributes

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li');
    task.classList.add("card"); //agrega un clase al elemento
    input.value = '';
    //templates strings: permite poner código html entre backticks
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    //task.innerHTML = content; //inyecta dinámicamente un html
    task.appendChild(taskContent)
    task.appendChild(deleteIcon());
    list.appendChild(task);//coloca un nodo hijo dentro del nodo padre
};

//listener
btn.addEventListener('click', createTask);

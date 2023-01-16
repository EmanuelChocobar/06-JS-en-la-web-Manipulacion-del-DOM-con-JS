import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTask.js";

const btn = document.querySelector("[data-form-btn]"); //data attributes

//listener
btn.addEventListener('click', addTask);

displayTasks();

//se puede mejorar el responsive, ordenar por la hora
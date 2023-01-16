import { displayTasks } from "./readTask.js";

const deleteIcon = (id) => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', () => deleteTask(id));
    return i;
};

const deleteTask = (id) => {
    const li = document.querySelector('[data-list]'); //selecciona el elemento padre
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex( (item) => item.id === id);
    tasks.splice(index, 1); //eliminar o agregar elementos (el elemento que queremos identificar, y la cantidad de elementos a eliminar)
    li.innerHTML = '';//aquí pone el elemnto vacio para que lo pueda eliminar
    localStorage.setItem("tasks", JSON.stringify(tasks));//borra del local storage
    displayTasks();
};

export default deleteIcon;
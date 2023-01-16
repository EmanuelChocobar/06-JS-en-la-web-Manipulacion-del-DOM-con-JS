import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTask.js";


//agrega la tarea a donde corresponda
export const addTask = (evento) => {//recibe un evento con el que se realiza el formulario
    evento.preventDefault();

    const list = document.querySelector('[data-list]')//trae la lista, que es el elemento donde vamos a agregar las tareas
    const input = document.querySelector('[data-form-input]');//titulo de la tarea
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;//texto que puso el usuario
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");//moment una librería para mostrar tiempo

    if(value === "" || date === ""){ //revisa que no este vacío
        return;//deja de ejecutar el resto del código
    };
    input.value = ''; //vacía el placeholder
    calendar.value = '';
    
    const complete = false;

    const taskObj = { 
        value,
        dateFormat,
        complete,
        id: uuid.v4()//crea un id diferente
    };
    list.innerHTML = "";//inicializa como un string vacío y después la función agrega la tarea

    //almacena datos en el local storage
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];//se usa const y no let porque asi solo podemos modificar su contenido, getItem entre llaves solo recibe el valor que queremos buscar, || [] esto significa que en  caso de fallar o null darle un valor por defecto
    taskList.push(taskObj);//agrega un elemento al array
    //sessionStorage.setItem("tasks", JSON.stringify(taskObj));//tenemos que enviar ambos en Strings
    localStorage.setItem("tasks", JSON.stringify(taskList));//tenemos que enviar ambos en Strings
    
    displayTasks();

    //const task = createTask(taskObj);
    //list.appendChild(task);//coloca un nodo hijo dentro del nodo padre, en la lista agrega un elemento por medio del data attribute  
};

//crea el html y prepara el contenido de la tarea
export const createTask = ({ value, dateFormat, complete, id}) => { //Ponemos los datos que queremos
    const task = document.createElement('li');
    task.classList.add("card"); //agrega un clase al elemento

    //templates strings: permite poner código html entre backticks
    const taskContent = document.createElement('div');
    const check = checkComplete(id)
    if(complete){
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    const titleTask = document.createElement("span");
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;

    task.appendChild(taskContent)
    //task.appendChild(dateElement);//la fecha
    task.appendChild(deleteIcon(id));
    return task;
};
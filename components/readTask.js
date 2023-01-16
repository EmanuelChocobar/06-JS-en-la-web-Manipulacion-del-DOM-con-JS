import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTasks = () => {
    const list = document.querySelector("[data-list]");//agregamos la lista que ya tenemos almacenada
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(taskList);
    orderDates(dates); //modifica directamente al arreglo dates

    //por cada elemento del arreglo de dates va a recorrer el arreglo tasklist
    dates.forEach( (date) =>{
        const dateMoment = moment(date, 'DD/MM/YYYY');//se hace para acceder a un método de moment
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);//devuelve la diferencia entre dos fechas
            if (diff === 0){
                list.appendChild(createTask(task));
            };
        });
    });

}
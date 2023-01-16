const checkComplete = (id) => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', (event) => completeTask(event, id));
    return i;
};
const completeTask = (event, id) => {
    const element = event.target;//es la propiedad del objeto que indica cual es el nodo exacto 
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex(item => item.id === id)//devuelve la posición en el arreglo
    tasks[index]["complete"] = !tasks[index]["complete"];//cambia el estado del check
    localStorage.setItem("tasks", JSON.stringify(tasks)); //guarda en el localstorage
};

export default checkComplete ;
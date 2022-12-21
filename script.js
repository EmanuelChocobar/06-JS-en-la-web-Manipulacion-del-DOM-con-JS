//immediately invoked function expression IIFE
( () => {
const btn =  document.querySelector("[data-form-btn]"); //data attributes

const createTask = (evento) =>{
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
    taskContent.appendChild(titleTask)
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `;
    //task.innerHTML = content; //inyecta dinámicamente un html
    task.appendChild(taskContent)
    list.appendChild(task);//coloca un nodo hijo dentro del nodo padre
};

//listener
btn.addEventListener("click", createTask);

const checkComplete = () =>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};
const completeTask = (event) => {
    const element = event.target;//es la propiedad del objeto que indica cual es el nodo exacto 
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

})();//la llamamos 

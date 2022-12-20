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
    const content = 
    `
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `
    task.innerHTML = content; //inyecta dinamicamente un html
    list.appendChild(task);
    console.log(content);
};

console.log(btn);
//listener
btn.addEventListener("click", createTask);


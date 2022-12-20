const btn =  document.querySelector("[data-form-btn]"); //data attributes

const createTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
};

console.log(btn);
//listener
btn.addEventListener("click", createTask);
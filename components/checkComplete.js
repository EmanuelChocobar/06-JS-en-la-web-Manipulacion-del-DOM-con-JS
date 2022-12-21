const checkComplete = () => {
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

export default checkComplete ;
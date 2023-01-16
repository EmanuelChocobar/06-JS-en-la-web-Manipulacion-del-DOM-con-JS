export default(date) => { //exporta directamente una función
    //estructura html para agregarla al dom
    const dateElement = document.createElement("li");
    dateElement.classList.add('date');
    dateElement.innerHTML = date;
    return dateElement;

}
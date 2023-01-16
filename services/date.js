export const uniqueDates = (tasks) => {
    const unique = [];
    tasks.forEach( task => {
        if(!unique.includes(task.dateFormat)){//si la fecha todavía no existe 
            unique.push(task.dateFormat);
        }
    });
    return unique;
};

export const orderDates = (dates) => { //ordena las fechas
    return dates.sort( (a, b) =>{
        const firstDate = moment(a, 'DD/MM/YYYY');
        const secondDate = moment(b, 'DD/MM/YYYY');
        return firstDate - secondDate;
    });
};
/* PROGRAMA QUE PERMITA CALCULAR EL FACTORIAL DE UN NÚMERO N SIENDO N UN NÚMERO NATURAL */
function factorial(num=0) {
    // Your code here
    let counter=1;
    for(let i=1;i<=num;i++){
        counter = counter*i;
    }
    return counter;
}
var fac = factorial(5);
console.log(fac);	// 120


/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
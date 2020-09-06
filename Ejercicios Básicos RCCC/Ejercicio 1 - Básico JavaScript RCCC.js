/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
//ELABORA UN PROGRAMA QUE CALCULE LA SUMA DE LOS PRIMEROS N NÚMEROS NATURALES SIENDO N UN NÚMERO NATURAL.

function suma_numeros(num=0) {
    // Your code here
    let counter=0;
    for(let i=1;i <= num; i++) {
        counter += i;
    }
    return counter;
}
var suma = suma_numeros(100);
console.log(suma); // 5050


/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */

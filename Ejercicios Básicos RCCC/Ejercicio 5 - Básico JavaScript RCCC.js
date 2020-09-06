/* REALIZAR UN MENÚ EL CUAL CONTENGA LAS SIGUIENTES OPCIONES:
    1. Saludar
    2. Decir algo random
    3. Despedirse
*/
function menu(opcion=0) {
    // body...
    switch(opcion){
        case 1:
            return '¡Hola chavales!'
            break;
        case 2:
            return '¿Sabías que los delfines duermen con un ojo abierto?'
            break;
        case 3:
            return 'Adiós chavales.'
            break;
    }
}

var respuesta = menu(1);
console.log(respuesta); // Hola chavales


/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
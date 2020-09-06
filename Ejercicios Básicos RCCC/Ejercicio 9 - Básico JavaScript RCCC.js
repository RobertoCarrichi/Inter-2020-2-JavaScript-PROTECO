// Realizar un menú de una calculadora en el que las opciones van a ser:
// 1. Sumar dos números
// 2. Restar dos números
// 3. Multiplicar dos números
// 4. Dividir dos números
// 5. Potencia de un número 
// 6. Raíz de un número
// 7. Salir


let option;
function menu(option) {
    let num1=4,num2=5;
    switch (option) {
        case 1:
            // SUMAR DOS NÚMEROS
            console.log('Ingresa dos números: ');
            console.log(num1 + num2)
            break;
        case 2:
            // RESTAR DOS NÚMEROS
            console.log('Ingresa dos números: ');
            console.log(num1 - num2)
            break;
        case 3:
            // MULTIPLICAR DOS NÚMEROS
            console.log('Ingresa dos números: ');
            console.log(num1 * num2)
            break;
        case 4:
            // DIVIDIR DOS NÚMEROS
            console.log('Ingresa dos números: ');
            if(num2==0){
                console.log('ERROR! No hay división entre cero. \n');
            }
            else{
                console.log(num1 / num2)
            }
            break;
        case 5:
            // POTENCIA DE UN NÚMERO
            console.log('Ingresa dos números: ');
            console.log(num1 ** num2)
            break;
        case 6:
            // RAÍZ DE UN NÚMERO
            console.log('Ingresa dos números: ');
            if(num1<0){
                console.log('ERROR! No existen raíces negativas. ): \n');
            }
            else{
                console.log(num1*(1/2))
            }
            break;
        case 7:
            // SALIR
            console.log('Has decidido salir. (: \n');
            break;
        default:
            console.log('ERROR! No has elegido ninguna opción válida, intenta de nuevo. \n');
            break;
    }
}

menu(1);


/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
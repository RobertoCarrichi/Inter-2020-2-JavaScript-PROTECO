/* Hecho por: Carrichi de la Cruz, Roberto Carlos.
Facultad de Ingeniería, UNAM */

// Escribe una función que reciba un arreglo y retorne el índice de un elemento tal que, los elementos que esten a la izquiera sumen lo mismo que los números que están a la derecha

function balancedFunction(array=[]) {
    // Your code here
    let index;
    for(index=1;index<(array.length-1);index++){
        let prev_suma=0,post_suma=0;
        for (let iMin = 0; iMin < index; iMin++) {
            prev_suma=prev_suma+array[iMin];
        }
        for(let iMax=(array.length-1);iMax>index;iMax--){
            post_suma=post_suma+array[iMax];
        }
        // console.log(`Cuando el indice es ${index}.\n\tSuma previa al índice: ${prev_suma}\n\tSuma posterior al índice: ${post_suma}`);
        if(prev_suma==post_suma){
            return index;
        }
    }
}

const array = [1,2,7,0,2,3,4,0,1];
const resultado = balancedFunction(array); // 3

console.log(`El arreglo ingresado:`);
console.log(array);

if(typeof(resultado)==="number"){
    console.log(`El índice es: ${resultado} (posición ${resultado+1} del arreglo).`);
}else{
    console.log('No existe índice que cumpla la condición. Lo siento.');
}

/* Hecho por: Carrichi de la Cruz, Roberto Carlos.
Facultad de Ingeniería, UNAM */
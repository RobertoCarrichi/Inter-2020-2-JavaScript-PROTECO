/* GENERAR UN PROGRAMA QUE IMPRIMA EL TIPO DE DATO DE CADA ELEMENTO DE UN ARRAY */

function tiposDatos(datos) {
    // Your code here
    let arrayFinal=[];
    for(let i=0;i<datos.length;i++){
        arrayFinal.push(typeof(datos[i]));
    }
    return arrayFinal;

}

var arreglo = ['Hola', 5, '5', true, false];

var resultado = tiposDatos(arreglo);
console.log(resultado) // string, number, string, boolean, boolean

/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
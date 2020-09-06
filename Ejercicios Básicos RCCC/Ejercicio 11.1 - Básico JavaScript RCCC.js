// Realizar un programa que pida al usuario números hasta que el usuario ingrese 0, después de esto va a realizar el promedio de todos los números ingresados.
// Tip: Puedes ingresar los datos desde un input y con un botón los agregas a un arreglo, cuando el usuario ingrese cero devuelves la suma en consola.

const clickme=document.getElementById('button');

let arreglo=[];
function prom(arreglo) {
    let total=0;
    for(let i=0;i<arreglo.length;i++){
        total=total+parseFloat(arreglo[i]);
    }
    console.log(`La suma total de los valores ingresados es de: ${total}`);
    total=(total)/(arreglo.length);
    return total;
}

clickme.addEventListener('click', ()=>{
    const value=document.getElementById("input").value;
    console.log(`El valor que ingresaste fue: ${value}`);
    if(value!=0){
        // AGREGAR EL VALOR AL ARREGLO
        arreglo.push(value);
        console.log(`Como escribiste: ${value}, se añadió al arreglo.`);
    }else{
        // MANDAR EL PROMEIDO
        console.log(`El promedio de los números proporcionados es de: ${prom(arreglo)}`);
    }
});

/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
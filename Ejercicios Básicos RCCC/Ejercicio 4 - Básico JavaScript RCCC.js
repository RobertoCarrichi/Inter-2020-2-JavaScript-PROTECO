/* HACER UN PROGRAMA QUE GUARDE LOS NÚMERO DEL 1 AL 100 EN DOS ARREGLOS, UNO DE NÚMEROS PARES Y OTRO DE IMPARES */
function arreglos(size=100) {
    // body...
    //Declaración de los arreglos
    let pares=[],impares=[];
    for(let i=1; i<=size; i++){
        //Si es par
        if(i%2==0){
            pares.push(i);
        } 
        //Si no es par
        else{
            impares.push(i);
        }
    }

	console.log(`Números pares ${pares}`); // Números pares 2, 4, 6, ..., 98, 100
	console.log(`Números impares ${impares}`); // Números impares 1, 3, 5, ..., 97, 99
}

arreglos();


/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
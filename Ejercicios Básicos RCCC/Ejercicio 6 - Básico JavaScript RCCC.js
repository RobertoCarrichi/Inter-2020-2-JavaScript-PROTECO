/* Hacer un programa que pida al usuario un nombre y una contraseña. Después de esto el programa le pedirá al usuario de nuevo su contraseña, si la contraseña es la correcta, imprimirá "Bienvenido 'Nombre de Usuario'" donde 'Nombre de Usuario' es el nombre que se ingresó, si la contraseña no es la correcta, imprimirá 'INCORRECTO'. */

function login(persona1, persona2) {
    // body...
    if(persona1.password===persona2.password){
        console.log(`Bienvenido ${persona1.name}`);
    }else{
        console.log('INCORRECTO');
    }
}

var persona1 = {}
persona1.name = 'Roberto'
persona1.password = 1234;

console.log('Ingresa nuevamente usuario y contraseña');

var persona2 = {};
persona2.name = 'Roberto';
persona2.password = 1234;

login(persona1, persona2); // Bienvenido Roberto

persona2.name = 'Roberto';
persona2.password = 'qwerty';

login(persona1, persona2); // INCORRECTO

/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
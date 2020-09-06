/* REALIZAR UN PROGRAMA EN EL QUE SE LE PIDA AL USUARIO DOS NÚMEROS DEL 1 AL 9, num1 y num2. DESPUÉS VA A IMPRIMIR TODOS LOS NÚMEROS NARUTALES DEL 1 AL 100, SIN EMBARGO, CUANDO UN NÚMERO SEA MÚLTIPLO DE num1 o num2 o contenga alguno de estos números, va a imprimir 'clap'. */

function clap(num1, num2) {
    // body...
    let j='';
    let a=`${num1}`;
    let b=`${num2}`;
    for(let i=1;i<=100;i++){
        //Si es múltiplo del primer número o es parte de el
        j=`${i}`;
        if((i%num1==0) ||(j.includes(a)==true)){
            console.log('Clap!');
        }
        //Si es múltiplo del segundo número 
        else if ((i%num2==0)||(j.includes(b)==true)) {
            console.log('Clap!');
        }
        //Imprime el número
        else {
            console.log(i);
        }
    }
}

clap(5, 7);

/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
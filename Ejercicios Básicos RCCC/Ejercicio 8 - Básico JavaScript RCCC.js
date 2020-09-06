//Escribir un programa que pida al usuario una cadena de texto e imprima la misma cadena de texto, pero antes de cada vocal, agregue una f.

function addF(text) {
    // body...
    let ftext='';
    let vocales=['a','e','i','o','u','A','E','I','O','U'];
    let arraytext=text.split('');
    for(let palabra=0; palabra<arraytext.length;palabra++){
        let reemplazo='';
        for(let vocal=0;vocal<vocales.length;vocal++){
            if(arraytext[palabra]==vocales[vocal]){
                reemplazo=arraytext[palabra].replace(`${vocales[vocal]}`,`f${vocales[vocal]}`);
            }
        }
        if(reemplazo==''){
            ftext=ftext+arraytext[palabra];
        }
        else{
            ftext=ftext+reemplazo;
        }
    }
    return ftext;
}

var fText = addF('Mi nombre es Ana');
console.log(fText); // Mfi nfombrfe fes fAnfa

/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
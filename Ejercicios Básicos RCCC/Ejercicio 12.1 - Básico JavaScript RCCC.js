// Detectar si una cadena es palíndromo o no.

const click=document.getElementById('button');

click.addEventListener('click', ()=>{
    let cadena=document.getElementById('input').value;
    console.log(`La cadena que ingresaste fue: ${cadena}`);
    if (palindrome(cadena)) {
        console.log("It's palindrome");
    } else {
        console.log("It isn't palindrome");
    }
})

function palindrome(cadena) {
    // here your code
    let reverse='';
    for(let i=cadena.length;i>0;i--){
        reverse=reverse+cadena[i-1];
    }
    console.log(`La cadena invertida es: ${reverse}`);
    if (cadena==reverse){
        return true;
    } else {
        return false;      
    }
}


/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
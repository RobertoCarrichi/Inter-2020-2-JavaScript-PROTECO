/* Hecho por: Carrichi de la Cruz, Roberto Carlos.
Facultad de Ingeniería, UNAM */

// Crear dos botones en el navegador, deben hacer lo siguiente:
//    Mostrar un mensaje en el navegador.
//    Cambiar de color aleatoriamente el background del navegador cada que se presione.

// Botón de mensaje
const mensaje_button = document.createElement('button');
mensaje_button.innerText = 'Muestra un mensaje';
document.body.append(mensaje_button);
const frase=[
    "No hemos sido los primeros, pero seremos los mejores.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Steve Jobs",
    "Cualquier cosa que valga la pena tener merece que se trabaje por ella.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Ray Kroc",
    "Ganar es no tener miedo de perder.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Robert Kiyosaki",
    "Se debe tener confianza en uno mismo y esa confianza debe estar basada en la realidad.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bobby Fischer",
    "Tienes que fracasar. Tienes que cometer cuantos más errores mejor. Es la manera de encontrar tu voz, de saber lo que quieres y lo que eres.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Susan Sarandon",
    "Sólo el ahora existe, sólo el ahora es real.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Dan Millman",
    "Es más fácil reprimir el primer capricho que satisfacer a todos los que le siguen.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Abraham Lincoln",
    "Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Confucio",
    "Mi final debe ser su principio.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- B.K.S. Iyengar",
]
const mensaje = document.createElement('h2');
mensaje.innerHTML = "<span>Tu frase motivacional del día:<br><br></span><span id='frase'></span>";
mensaje_button.addEventListener('click',()=>{
    document.body.append(mensaje);
    const frasefinal=document.getElementById('frase');
    frasefinal.innerHTML=randomFrases(frasefinal.innerHTML);
});

function randomFrases(cadena){
    let randomMensaje = cadena;
    while(cadena==randomMensaje){
        randomMensaje=frase[Math.floor(Math.random()*frase.length)];
    }
    return randomMensaje;
}


// Botón de colores
const background_button = document.createElement('button');
background_button.innerText = 'Cambia el color';
document.body.append(background_button);

background_button.addEventListener('click',()=>{
    let color = randomColor();
    document.body.setAttribute('style',`background-color: ${color}`);
});

function randomColor() {
    // Creación de tres valores entre 0 y 255 para hacer un color RBG.
    function random() {
        return Math.floor(Math.random()*255);
    }
    let color='RGB('+random()+','+random()+','+random()+')';
    return color;
}

/* Hecho por: Carrichi de la Cruz, Roberto Carlos.
Facultad de Ingeniería, UNAM */

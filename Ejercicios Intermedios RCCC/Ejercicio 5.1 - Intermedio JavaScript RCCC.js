/* Hecho por: Carrichi de la Cruz, Roberto Carlos.
Facultad de Ingeniería, UNAM */

// Traer los primeros 100 pokemones registrados en la pokedex. Imprimir en el navegador los pokemones cuyo nombre sea de longitud mayor a 5 caracteres.
// Tips: Usar la función filter.

async function search(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon_json = response.json();
    return pokemon_json;
}
async function info() {
    const info_poke=[];
    for(let i=1;i<=100;i++){
        const data = await search(i);
        info_poke.push([data.id,data.name]);
    }
    return info_poke;
}
const boton_inicio = document.getElementById('inicio');
boton_inicio.addEventListener('click',async ()=>{
    const mensaje = document.createElement('h4');
    mensaje.innerHTML="Los pokemon son los siguientes:"
    document.body.append(mensaje);
    
    let data=[]; 
    data= await info();
    /*El arreglo ya solo se queda con la información de los pokemon que si pasaron el filtro*/ 
    data=data.filter(menores_5);
    
    //Impresión en ventana de navegación 
    for(let i=0;i<data.length;i++){
        const result = document.createElement('p');
        result.innerHTML=format(data[i]);
        document.body.append(result); 
    }

});
function menores_5(pokemon_info=[]) {
    // [0]=ID [1]=NAME
    if(pokemon_info[1].length>5){
        return pokemon_info;
    }
}
function format(array){
    return `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ID:</b> ${array[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Nombre:</b> ${array[1]}`;
}


/* Hecho por: Carrichi de la Cruz, Roberto Carlos.
Facultad de Ingeniería, UNAM */

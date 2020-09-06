// Explorar la API de rick and morty o alguna otra de tu agrado y mostrar información de algun personaje en consola.

const cuerpo = document.getElementById('cuerpo');
cuerpo.setAttribute('style',
"padding-top: 2vh;background-color:lightblue; text-align:center; font-family: 'Kumbh Sans', sans-serif;"
);

const enviar=document.getElementById('botonEnviar');
enviar.setAttribute('style',"margin-left:1vw; font-family: 'Kumbh Sans', sans-serif;");
const input = document.getElementById('input');
input.setAttribute('style',"margin-top:2vh; font-family: 'Kumbh Sans', sans-serif;");

// CALLBACK
enviar.addEventListener('click',()=>{
	enviar.setAttribute('style',"display:none;");
	input.setAttribute('style',"display:none;");
	document.body.append(again);
	info(input.value);
});

const again = document.createElement('button');
again.setAttribute('style',"font-family: 'Kumbh Sans', sans-serif;");
again.innerText='Inténtalo de nuevo';
// CALLBACK
again.addEventListener('click',()=>{
	window.location.reload();
});

async function search(id){
    const response = await fetch(`
    http://rickandmortyapi.com/api/character/${id}`);
    const personaje = await response.json();
    return personaje;
}

async function info(id){
   const data = await search(id,id);
   const img = document.createElement('img');
   console.log(`El ID ingresado fue: ${data.id}`); 
   console.log(`Nombre del personaje: ${data.name}.`); 
   console.log(`Especie del personaje: ${data.species}.`); 
   console.log(`Género: ${data.gender}.`); 
   console.log(`Estado en la serie: ${data.status}.`); 
   console.log(`Origen: ${data.origin.name}.`); 
   console.log(`Localización: ${data.location.name}.`);
}

/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
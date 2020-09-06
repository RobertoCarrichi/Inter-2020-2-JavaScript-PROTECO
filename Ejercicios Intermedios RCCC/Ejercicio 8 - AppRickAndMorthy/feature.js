/* Hecho por: Carrichi de la Cruz, Roberto Carlos.
Facultad de Ingeniería, UNAM */

// EJERCICIO 3 - Intermedio
// Explorar la API de rick and morty o alguna otra de tu agrado y mostrar información de algun personaje en LA VENTANA DEL EXPLORADOR.

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
	const data = await search(id);
	const img = document.createElement('img');
	const iD = document.createElement('p');
	const nombre = document.createElement('p');
	const especie = document.createElement('p');
	const genero = document.createElement('p');
	const estado = document.createElement('p');
	const origen = document.createElement('p');
	const location = document.createElement('p');
	iD.innerHTML=`El ID ingresado fue: ${data.id}`;
	document.body.append(iD);
	nombre.innerText=`Nombre del personaje: ${data.name}.`;
	document.body.append(nombre);
	especie.innerHTML=`Especie del personaje: ${data.species}.`;
	document.body.append(especie);
	genero.innerHTML=`Género: ${data.gender}.`;
	document.body.append(genero);
	estado.innerHTML=`Estado en la serie: ${data.status}.`;
	document.body.append(estado);
	origen.innerHTML=`Origen: ${data.origin.name}.`;
	document.body.append(origen);
	location.innerHTML=`Localización: ${data.location.name}.`;
	document.body.append(location);
	img.setAttribute('src',data.image);
	document.body.append(img);
}


/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
/* Hecho por: Carrichi de la Cruz, Roberto Carlos.
Facultad de Ingeniería, UNAM */

// Escribe una función que reciba 4 parámetros:
//      obj: será un objeto
//      operation: podrá ser edit o delete
//      prop: recibe una propiedad del objeto
//      newValue: recibe un valor
// Si la operación es edit retorna el mismo objeto, si aparete de ser edit, recibo en la función una propiedad esta propiedad deberá ser modificada y el valor será lo que viene en newValue. Si la oeración es delete tengo que eliminar la propiedad que me indican y newValue será undefined. Al final retornar el nuevo objeto modificado.

function manipulateStudentRecord(obj, operation, prop, newValue) {
    // Your code here
    switch (operation) {
        // person, 'edit', 'name', 'Armando'
        case 'edit':
            if(prop!=undefined){
                if(newValue==undefined){
                    console.log('Lo siento, tu solicitud no puede ser aceptada. Añade un valor a newValue.');
                }else{
                    switch (prop) {
                        case 'name':
                            obj.name=newValue;
                            break;
                        case 'lastName':
                            obj.lastName=newValue;
                            break;
                        case 'city':
                            obj.city=newValue;
                            break;
                        case 'hobby':
                            obj.hobby=newValue;
                            break;
                        default:
                            console.log('Error! Algo pasó con el switch.');
                            break;
                    }
                    return obj;
                }
            }else{
                console.log('Se te devolvió el mismo objeto.');
                return obj;
            }
            break;
        case 'delete':
            delete newValue;
            switch (prop){
                case 'name':
                    delete obj.name;
                    break;
                case 'lastName':
                    delete obj.lastName;
                    break;
                case 'city':
                    delete obj.city;
                    break;
                case 'hobby':
                    delete obj.hobby;
                    break;
                default:
                    console.log('Error! Algo pasó con el switch en DELETE.');
                    break;
            }
            return obj;
            break;
        default:
            console.log('Error! Hubo un problema con el atributo OPERATION.');
            break;
    }
}

const person = {
	name: 'Roberto',
	lastName: 'Carrichi',
	city: 'Mexico',
	hobby: 'Programming'
}

const obj = manipulateStudentRecord(person, 'delete', 'name', undefined);
console.log(obj);
/* // Resultado esperado
{
    lastName: 'Carrichi',
	city: 'Mexico',
	hobby: 'Programming'
}
*/

const obj2 = manipulateStudentRecord(person, 'edit', 'name', 'Carlos');
console.log(obj2);
/* // Resultado esperado
{
	name: 'Carlos',
	lastName: 'Carrichi',
	city: 'Mexico',
	hobby: 'Programming'
}
*/

/* Hecho por: Carrichi de la Cruz, Roberto Carlos.
Facultad de Ingeniería, UNAM */
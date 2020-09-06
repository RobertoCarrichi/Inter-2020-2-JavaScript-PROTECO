/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
// Crear una clase personas que tenga tres propiedades y tres métodos, a elegir. No se puede utilizar la palabra reservada class, las propiedades tiene que ser privadas. Nota: Usar closures

function actions(option,user){
    switch (option) {
        case 0:
            console.log(`Datos del usuario:`);
            console.log(user);
            break;
        case 1:
            console.log('\nSaludo:');
            console.log(`\tHola, me llamo ${user.name}. Gusto en conocerte. (:`);
            break;
        case 2:
            console.log('\nPresentación:');
            console.log(`\tSoy ${user.name}. Tengo ${user.age} años, vivo en ${user.country} y mi sexo es ${user.sex.toLowerCase()}.`);
            break;
        case 3:
            console.log('\nDespedida:');
            console.log(`\tEs momento de irme, adiós.\n\t- ${user.name}, ${user.age} años.`);  
            break;
        default:
            console.log('ERROR! Hubo un problema con las elección.');
            break;
    }
}

function User(name=null,age=null,sex='Indefinido',country=null){
    const user={
        name:name,
        age:age,
        sex:sex,
        country:country,
    }
    return {
        data: ()=>{
            actions(0,user);
        },
        saludar: ()=>{
            actions(1,user);
        },
        presentar: ()=>{
            actions(2,user);
        },
        despedir: ()=>{
            actions(3,user);
        },
    }
}
const Roberto = new User('Roberto',18,'Masculino','México');
Roberto.data();
Roberto.saludar();
Roberto.presentar();
Roberto.despedir();

/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
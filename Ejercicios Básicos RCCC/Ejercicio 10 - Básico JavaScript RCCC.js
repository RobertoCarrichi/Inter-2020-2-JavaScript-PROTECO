// Realizar un programa que imprima la serie de fibonacci hasta el elemento n que espedifique el usuario

function fibo(position=0) {
    // body...
    if(position==0){
        return 0;
    }else if((position==1)||(position==2)){
        return 1;
    }
    else{
        let result=0;
        let anterior1=1;
        let anterior2=1;
        for(let actual=3;actual<=position;actual++){
            result=anterior1+anterior2;
            anterior2=anterior1;
            anterior1=result;
        }
        return result;
    }
}

var fibResult = fibo(5);
console.log(fibResult); // 5




/* Hecho por: Carrichi de la Cruz, Roberto Carlos
Facultad de Ingeniería, UNAM */
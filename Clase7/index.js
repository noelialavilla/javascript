function mayorQue(n){
    return m=>m>n;
}

let mayorQueCinco=mayorQue(5);
console.log(mayorQueCinco(6));

let mayorQue20 = mayorQue(20);
console.log(mayorQue20(30));

function operaciones(op)
{
    if(op === "sumar"){
        return (a,b) => a+b;
    }
    if(op === "restar"){
        return (a,b) => a - b;
    }
    if(op === "multiplicar"){
        return (a,b) => a * b;
    }
    if(op === "dividir"){
        return (a,b) => a / b;
    }
}

let suma =operaciones("sumar");
res= suma(2,6);
console.log(res);

function recorrer(arreglo, funcion){
    for (const item of arreglo) {
        console.log(item);
    }
}

const arreglo = [1,56,8,4];
recorrer(arreglo, console.log);

arreglo.forEach(item  => {  
    console.log(item);

});

let encontrado = arreglo.find(item=> item===5);
console.log(encontrado);
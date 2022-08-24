function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

let miNumero = getRandomIntInclusive(1,10);
let numero = prompt("Adivine en que numero del 1 al 10 estoy pensando :");
let intentos=2;

while (numero!= miNumero && intentos >0)
{
    numero = prompt("Incorrecto! Escoja otro numero: ");
    intentos--;

}

if (numero==miNumero)
{
    alert("Felicitaciones! " + numero +" es correcto!");
}else{
    alert("Incorrecto! Se quedo sin intentos! Suerte la proxima vez.");
}




/*     function  saludar(){
            console.log("Hola click");
        }
        let boton=document.getElementById("btnPrincipal");
        boton.addEventListener("click", saludar ); */

/*      let boton = document.getElementById("btnPrincipal");
     boton.onclick=() =>{console.log("Respuesta 2")} */
/* function saludar( nombre) {
    console.log("Hola click" +nombre);
}
const saludar=(nombre)=>
{
    console.log("hola click");
}
let boton = document.getElementById("btnPrincipal");
let evento = prompt("Ingrese el evento");
boton.addEventListener(evento, saludar);
boton.addEventListener(evento,()=> saludar("andres"));
 */
/* function saludar( nombre) {
    console.log("Hola click " +nombre);
}
let boton = document.getElementById("btnPrincipal");

let saludo=document.getElementById("saludo"); */

// boton.addEventListener("mouseover", ()=>console.log(saludar("mouseover")));
// boton.addEventListener("mousedown", ()=>console.log(saludar("mousedown")));

// boton.addEventListener("mousemove", ()=>console.log(saludar("mousemove")));
/* boton.addEventListener("mouseout", ()=>saludo.className="rojo");

let nombre =document.getElementById("nombre"); */
// nombre.addEventListener("keydown",()=> console.log("keydown"));
/* nombre.addEventListener("keyup", (e) =>{
    if(e.key==="a"){
        saludo.className="rojo";
    }else if(e.key==="s"){
        saludo.className="azul";
    }else{
        saludo.className="amarillo"
    }
}) */

/* nombre.addEventListener("input",()=> {
    if (nombre.value.includes("@"))    {
        saludo.className="azul";
    }else{
        saludo.className="rojo"
    }
})
 */
/* nombre.addEventListener("input",()=> {
    if (nombre.value.includes("@"))    {
        saludo.className="azul";
    }else{
        let mensaje= document.createElement("div");
        mensaje.innerHTML="Correo inválido";
        mensaje.className="rojo"
        document.body.append(mensaje);
    }
})
 */
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) =>{

    e.preventDefault();
    let inputs = e.target.children;
    console.log(inputs[0].value);
    // inputs[0]="";
    console.log(inputs[1].value);
    if(!input[0].value.includes("@")){
        inputs[0]="";
    }
})
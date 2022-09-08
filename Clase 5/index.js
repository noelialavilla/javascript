// Funciones constructoras
function Persona(nombre, edad, direccion)
{
    this.nombre=nombre;
    this.edad=edad;
    this.direccion=direccion;
}
let persona1 = new Persona("Noelia","26","Calle Falsa 123");
console.log(persona1.nombre);


function PersonaCon(info){
    this.nombre= info.nombre;
    this.edad= info.edad;
    this.colorCabello= info.colorCabello;
    this.colorOjos= info.colorOjos;
}

let persona2= new PersonaCon({
    nombre:  "Damian",
    edad: 34,
    colorCabello: "negro",
    colorOjos: "marron"
})

console.log(persona2.colorCabello);


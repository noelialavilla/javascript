
class Producto{
    constructor(id, nombre, precio)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}

class Carrito{
    constructor(){
        this.items=[];
    }
    agreagarAlCarrito(producto){
        this.items.push(producto);
    }

}


const prod1 = new Producto(39, "Palta", 566);
miCarrito =new Carrito();
miCarrito.agreagarAlCarrito(prod1);
console.log("Items: ");
miCarrito.items.forEach(element => {
    console.log(element.id);
    
});
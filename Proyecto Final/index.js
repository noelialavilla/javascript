/* Considere necesario agregar la libreria Sweet Alert ya que me ayuda a 
comunicarme con los clientes de manera interactiva y visualmente atractiva*/
let productos = [
    { id: 0, nombre: "Body Cherry in the Air", precio: 550 },
    { id: 1, nombre: "Perfume Good Girl", precio: 900 },
    { id: 2, nombre: "Perfumina Sandalo Dulce", precio: 550 },
    { id: 3, nombre: "Perfume Cherry the Air", precio: 900 },
    { id: 4, nombre: "Perfumina Coniglio", precio: 550 },
    { id: 5, nombre: "Perfumina Bouquet de flores", precio: 550 },
    { id: 6, nombre: "Perfumina de dulce de leche", precio: 550 },
    { id: 7, nombre: "Difusor flores y citricos", precio: 550 }
]

class Carrito {
    constructor() {
        this.items = [];
    }

    agregarAlCarrito(producto) {
        this.items.push(producto);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha agregado ' + producto.nombre + ' al carrito!',
            showConfirmButton: false,
            timer: 1800
        })


    }

}
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

miCarrito = new Carrito();


for (let i = 0; i <= 7; i++) {
    let boton = "boton-venta" + i.toString();
    let boton2 = document.getElementById(boton);
    console.log(productos[i].id);
    boton2.addEventListener("click", () => miCarrito.agregarAlCarrito(
        new Producto(productos[i].id, productos[i].nombre, productos[i].precio)

    ));

}
function mostrarTotal() {
    let total = 0;
    miCarrito.items.forEach(element => {
        total += element.precio;

    });
    
    Swal.fire({
        title: 'Su compra total es de $' + total+ '. Desea pagar con tarjeta o con transferencia?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Tarjeta',
        denyButtonText: `Transferencia`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Se realizo el pago con tarjeta.', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Se realizo el pago con transferencia', '', 'success')
        }
      })
   
}

/* function pagar(medioDePago) {
    switch (medioDePago) {
        case '1':
            alert("Se realizo el pago con tarjeta. ");
            break;
        case '2':
            alert("Se realizo el pago con transferencia. ");
            break;
        default:
            break;
    }

} */
/* document.getElementById("contactButton").onclick = function () {
    location.href = "./contact.html";
};
document.getElementById("fbButton").onclick = function () {
    location.href = "www.facebook.com";
};
document.getElementById("twButton").onclick = function () {
    location.href = "www.twitter.com";
};
document.getElementById("igButton").onclick = function () {
    location.href = "https://www.instagram.com/grace.aromas/";
};
 */



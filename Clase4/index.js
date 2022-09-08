function saludar(){
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);
}

saludar();

let genero = prompt(`Usuario\nIngrese Genero:\nM - Masculino\nF - Femenino`)


        while(genero.toLowerCase() != "m" && genero.toLowerCase() != "f"){
            alert(`No se ingreso correctamente el Genero del Usuario`)
            genero = prompt(`Usuario\nIngrese Genero (M o F):\nM - Masculino\nF - Femenino`)
        }
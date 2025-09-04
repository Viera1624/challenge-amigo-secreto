// Variables
let listaAmigos = [];

function vaciarCampo() {
    document.getElementById("amigo").value = '';
}

function mostrarLista() {
    let listaMostrada = document.getElementById("listaAmigos");
    listaMostrada.innerHTML = "";

    for (let posicion = 0; posicion < listaAmigos.length; posicion++) {
        let amigo = document.createElement('li'); //Crea un elemento <li>
        amigo.textContent = listaAmigos[posicion];
        listaMostrada.appendChild(amigo);

    }
}

function agregarAmigo() {
    //Guarda el nombre del amigo ingresado
    let amigoIngresado = document.getElementById("amigo").value;

    //Si el nombre tiene más de 10 caracteres
    if (amigoIngresado.length > 10) {
        alert("Ingrese un nombre valido, maximo 10 caracteres");
        vaciarCampo();

    } else {
        //Si el campo está vacío
        if (amigoIngresado.length == 0) {
            alert("Por favor ingrese un nombre");

        } else {
            //Si el amigo ya está en la lista
            if (listaAmigos.includes(amigoIngresado)) {
                alert("El nombre ya está en la lista");
                vaciarCampo();
                //return agregarAmigo();

            } else {
                //Añadir amigo a la lista
                listaAmigos.push(amigoIngresado);
                console.log(listaAmigos);
            }

        }

        //Mostrar lista en la página
        mostrarLista();

        //limpiar el campo
        vaciarCampo();





    }


}
// Variables
let listaAmigos = [];
let listaAmigosSorteados = [];

function vaciarCampo() {
    document.getElementById("amigo").value = '';
}

function mostrarLista() {
    let listaMostrada = document.getElementById("listaAmigos");
    listaMostrada.innerHTML = "";

    for (let posicion = 0; posicion < listaAmigos.length; posicion++) {
        let amigo = document.createElement('li'); // Crea un elemento <li>
        amigo.textContent = listaAmigos[posicion]; // Añade el nombre del amigo
        listaMostrada.appendChild(amigo); // Muestra el nombre en la lista

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
                
            }

        }

        //Mostrar lista en la página
        mostrarLista();

        //limpiar el campo
        vaciarCampo();





    }


}

function sortearAmigo() {
    // Verifica que la lista no esté vacía
    if (listaAmigos == '') {
        alert("Por favor ingrese al menos dos nombres para sortear");
    } else {
        // Sortear un amigo
        let sortear = parseInt(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[sortear];

        // Si ya se sortearon todos los amigos
        if (listaAmigosSorteados.length == listaAmigos.length) {
            alert("Ya se sortearon todos los amigos añade más o recarga la página");

            // Si el nombre ya se sorteó   
        } else {
            if (listaAmigosSorteados.includes(amigoSorteado)) {
                return sortearAmigo();

            }
            listaAmigosSorteados.push(amigoSorteado);
            

            // Mostrar el amigo sorteado
            let resultado = document.getElementById("resultado").innerHTML = amigoSorteado;

        }
    }



}
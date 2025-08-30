// Variables
let listaAmigos = [];

function vaciarCampo() {
    document.getElementById("amigo").value = '';
}

function agregarAmigo() {
    //Guarda el nombre del amigo ingresado
    let amigoIngresado = document.getElementById("amigo").value;

    //Si el nombre tiene más de 10 caracteres
    if (amigoIngresado.length > 10) {
        alert("Ingrese un nombre valido, maximo 10 caracteres");

        //Si el campo está vacío
    } else {

        if (amigoIngresado.length == 0) {
            alert("Por favor ingrese un nombre");

        } else {
            //Mostrar la lista en la pagina
            let listaMostrada = document.getElementById("listaAmigos"); //selecciona el elemento <ul> de html

            if (listaAmigos.includes(amigoIngresado)) {
                alert("El nombre ya está en la lista");
                vaciarCampo();
                return agregarAmigo();

            }
            let nuevoAmigo = document.createElement("li"); // Creamos un <li>
            nuevoAmigo.textContent = amigoIngresado; // Asignamos el nombre del amigo
            listaMostrada.appendChild(nuevoAmigo); // Lo añadimos a la lista que se va a mostrar


            // Verifica si el amigo ya está en la lista
            listaAmigos = Array.from(listaMostrada.children).map(li => li.textContent);
            console.log(listaAmigos);
            // si el amigo ya está en la lista

        }

        //limpiar el campo
        vaciarCampo();





    }


}
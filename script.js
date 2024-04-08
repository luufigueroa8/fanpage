/* listado de la información de las cartas  */

const listadoCartas = [
    
    {
        id: 1,
        artista: "Harry Styles",
        imagen: "./imagen/harry.jpg",
        link:"https://youtu.be/-UJCMfuFtSQ",
    }
    
]


/* NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")

function recorrerListado () {
/* función que recorre el listado de las cartas */
contenedorCartas.innerHTML= ""
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `
            <article class="card">
               <a href="${carta.link}" target="_blank">
                   <img src=${carta.imagen} alt="imagen">
                </a>
                <div class="info">
                   <h2>${carta.artista}</h2>
            </div>
            </article>`
)
}
recorrerListado ()

function crearCarta () {
//pedir los datos 
    const artista = prompt ("Nombre del artista")
    const imagen = prompt ("Imagen del artista")
    const link = prompt ("Link de tu canción favorita")

    //crear un object con los datos 
    const carta = {imagen, artista, link}

    //añadir la carta al listado
    listadoCartas.push(carta)

    //llamado a la funcion recorrer cartas
    recorrerListado()
}

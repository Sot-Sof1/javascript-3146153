const tituloComic = document.querySelector('.titulo');
const descripcionComic = document.querySelector('.parrafo');
const imgComic = document.querySelector('.episodio-1 img .episodio-1');
const listaCaps = document.querySelector('.contenedor-padre-de-episodios');


/* Mostrar información de la base de dato de la página */

tituloComic.textContent = comic.nombreComic
descripcionComic.textContent = comic.Descripcion

/* Imprimir información del capítulo */

/* listaCaps.comic.forEach(Capitulos => {
    
}); */


comic.capitulos.forEach(capitulos => {
    const div = document.createElement('div');
    div.classList.add('episodio-1');
    div.classList.add('espisodios');
    div.classList.add('miniatura');
    div.classList.add('episodios-contenedor');
    div.innerHTML = `
    <img src="${capitulos.miniatura}" width = "230"  alt="">
    <p>${capitulos.nombreCap}</p>
    `
    listaCaps.appendChild(div);
});
let imagen = document.querySelector('.imagen')
let boton1 = document.querySelector('.boton1')
let boton2 = document.querySelector('.boton2')
let boton3 = document.querySelector('.boton3')

boton1.addEventListener('click', imagenclick1) 
function imagenclick1() {
    imagen.style.filter = 'grayscale(100%)'
}
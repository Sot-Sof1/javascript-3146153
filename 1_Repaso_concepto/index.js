let imagen = document.querySelector('#imagen')
let boton1 = document.querySelector('#boton1')
let boton2 = document.querySelector('#boton2')
let boton3 = document.querySelector('#boton3')

boton1.addEventListener('click', imagenclick1) 
function imagenclick1() {
    imagen.style.filter = 'grayscale(100%)'
    boton1.addEventListener('click', imagenclick2)
    boton1.removeEventListener('click', imagenclick1)
}

function imagenclick2() {
    imagen.style.removeProperty('filter')
    boton1.addEventListener('click', imagenclick1)
    boton1.removeEventListener('click', imagenclick2)
}


boton2.addEventListener('click', imagenclick3) 
function imagenclick3() {
    imagen.style.filter = 'blur(5px)'
    boton2.addEventListener('click', imagenclick4)
    boton2.removeEventListener('click', imagenclick2)
}

function imagenclick4() {
    imagen.style.removeProperty('filter')
    boton2.addEventListener('click', imagenclick3)
    boton2.removeEventListener('click', imagenclick4)
}


boton3.addEventListener('click', imagenclick5)
function imagenclick5() {
    imagen.style.transform = 'scale(1.1) rotate(4deg)'
    boton3.addEventListener('click', imagenclick6)
    boton3.removeEventListener('click', imagenclick5)
}

function imagenclick6() {
    imagen.style.removeProperty('transform')
    boton3.addEventListener('click', imagenclick5)
    boton3.removeEventListener('click', imagenclick6)
}

/* const imagen = document.querySelector('#imagen');
const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');
const boton3 = document.querySelector('#boton3');


boton1.addEventListener('click', blancoynegro);
function blancoynegro() {
    console.log('Imagen modificada');
    imagen.style.filter = 'grayscale(100%)';
    boton1.style.backgroundColor = '#07196b';
      
}

boton2.addEventListener('click', desenfocar);
function desenfocar() {
    imagen.style.filter = 'blur(5px)';
}

boton3.addEventListener('click', zoomyrotar);
function zoomyrotar() {
    imagen.style.transform = 'scale(1.1) rotate(4deg)';
}
 */



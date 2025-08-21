let inicio = document.querySelector('.contenedor');
let texto = document.querySelector('.texto');
let dino = document.querySelector('.dino');
let suelo = document.querySelector('.suelo');
let marcador = document.querySelector('.marcador');
let cactus = document.querySelector('.cactus');
let final = document.querySelector('.game-over');
let audioGameOver = document.querySelector('.audio-game-over');
let audioMarcador = document.querySelector('.audio-marcador');
let audio = document.querySelector('.audio-salto');
let botonAmbiente = document.querySelector('.ambiente');
let audioAmbiente = document.querySelector('.audio-ambiente');
let puntuacion = 0;

final.style.display = 'none';

texto.addEventListener('click', funcioninicio);
function funcioninicio() {
  suelo.classList.add('suelo-mover')
  cactus.classList.add('cactus-mover');
  dino.classList.add('dino-corriendo');
  texto.remove('texto');

  
  document.addEventListener("keydown", dinoSalto);
  function dinoSalto(event) {
    if (event.keyCode === 32) {
      if (dino.classList.contains('dino-salto')) return;
      dino.classList.add('dino-salto');
      setTimeout(function () {
        dino.classList.remove('dino-salto');
      }, 1000);
    }
  }

  document.addEventListener("keydown", puntuacionAumenta);
  function puntuacionAumenta(event) {
    if (event.keyCode === 32) {
      puntuacion++;
      marcador.innerHTML = puntuacion;
      if(puntuacion % 5 === 0){
        audioMarcador.play();
      }
    }

  }


  document.addEventListener("keydown", audioSalto);
  function audioSalto(event) {  
    if (event.keyCode === 32) {
      audio.play();
    }
  }

}

let intervalo = setInterval(function () {

  const dinorect = dino.getBoundingClientRect();
  const cactusrect = cactus.getBoundingClientRect();

  if (dinorect.left < cactusrect.right &&
    dinorect.right > cactusrect.left &&
    dinorect.bottom > cactusrect.top) {
    suelo.style.animationPlayState = 'paused';
    cactus.style.animationPlayState = 'paused';
    dino.classList.remove('dino-saltando');
    dino.classList.remove('dino-corriendo');
    dino.classList.add('dino-estrellado');
    marcador.style.display = 'none';
    final.style.display = 'block';
    audioGameOver.play();
    clearInterval(intervalo);
  }

}, 10);

botonAmbiente.addEventListener('click', presionarboton);
function presionarboton() {
  if (audioAmbiente.paused) {
    audioAmbiente.play();
    botonAmbiente.innerHTML = 'Pause';
  } else {
    audioAmbiente.pause();
    botonAmbiente.innerHTML = 'Play';
  }
}

// Cambiar escenas

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const escena1 = document.querySelector('.escena-1');
const escena2 = document.querySelector('.escena-2');
const escena3 = document.querySelector('.escena-3');
let i = 1

next.addEventListener('click', function() {
  if(i === 1){
    escena1.classList.add('d-none')
    escena2.classList.remove('d-none')
    i++

  }else if(i === 2){
    escena2.classList.add('d-none')
    escena3.classList.remove('d-none')
    i++
  }

} )















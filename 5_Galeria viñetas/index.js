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
let puntuacion = 0;

final.style.display = 'none';


inicio.addEventListener('click', funcioninicio);
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














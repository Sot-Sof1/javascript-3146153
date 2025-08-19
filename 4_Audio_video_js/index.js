const video = document.querySelector('#video');
const audio1 = document.querySelector('#audio1');
const audio2 = document.querySelector('#audio2');
const audio3 = document.querySelector('#audio3');
const playVideo = document.querySelector('#play-video');
const stopVideo = document.querySelector('#stop-video');
const playStopImg1 = document.querySelector('#play-stop-img1');
const playStopImg2 = document.querySelector('#play-stop-img2');

/* Función para reproducir video */
function reproducirVideo() {
    video.play()
    audio3.play()
}


/* Evento de click "addEventListener" que ejecuta reproducriVideo */
playVideo.addEventListener('click', reproducirVideo);

/* Función para pausar video */
function pausarVideo() {
    video.pause();
    audio3.pause();
}


/* Evento de click "addEventListener" que ejecuta pausarVideo */
stopVideo.addEventListener('click', pausarVideo);


/* toggleAudioUno */

playStopImg1.addEventListener('click', toggleAudioUno);

function toggleAudioUno() {

    if (audio1.paused) {
        audio1.play();
        playStopImg1.textContent = 'Stop';
    }
    else {
        audio1.pause();
        playStopImg1.textContent = 'Play';
    }

}


playStopImg2.addEventListener('click', toggleAudioDos);

function toggleAudioDos() {

    if (audio2.paused) {
        audio2.play();
        playStopImg2.textContent = 'Stop';
    }
    else {
        audio2.pause();
        playStopImg2.textContent = 'Play';
    }

}


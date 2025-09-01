
const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;

/* console.log(monedas, corazon, contadorMonedas, contadorCorazones); */

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar");
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

    })

})

corazones.forEach(function (corazon) {

    corazon.addEventListener("click", function () {
        corazon.classList.add("saltar");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
    })
})

const escenas = document.querySelectorAll(".escena");
const btnAnterior = document.querySelector(".anterior");
const btnSiguiente = document.querySelector(".siguiente");
const miniaturas = document.querySelectorAll(".miniaturas img");
let indice = 0;

/* console.log(escenas)
console.log(escenas[1]) */

function mostrarEscena(i) {
    /*  console.log(escenas[i]) */
    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove("activa");

    }

    escenas[i].classList.add("activa");

    indice = i;
}


/* boton siguiente */

btnSiguiente.addEventListener("click", function () {
    indice++;
    if (indice >= escenas.length) {
        indice = 0; /* para que vuelva a la primera escena */
    }

    mostrarEscena(indice);
})

btnAnterior.addEventListener("click", function () {
    indice--;
    if (indice < 0) {
        indice = escenas.length - 1; /* para que vvalla a la ultima */
    }

    mostrarEscena(indice);
})


/* Miniaturas */

miniaturas.forEach((miniatura, i) => {
    miniatura.addEventListener("click", function () {
        mostrarEscena(i);
    })
});


/* Boton audio */
const btnAudio1 = document.querySelector(".btn-audio1");
const audio1 = document.querySelector(".btn-audio1 audio");
const parrafo = document.querySelector(".btn-audio1 p");


btnAudio1.addEventListener("click", activa);

function activa() {
    audio1.play();
    parrafo.textContent = "⏸";
    btnAudio1.removeEventListener("click", activa);
    btnAudio1.addEventListener("click", desactiva);
}

function desactiva() {
    audio1.pause();
    parrafo.textContent = "▶";
    btnAudio1.removeEventListener("click", desactiva);
    btnAudio1.addEventListener("click", activa);
}


const btnAudio2 = document.querySelector(".btn-audio2");
const audio2 = document.querySelector(".btn-audio2 audio");
const parrafo2 = document.querySelector(".btn-audio2 p");


btnAudio2.addEventListener("click", activa2);

function activa2() {
    audio2.play();
    parrafo2.textContent = "⏸";
    btnAudio2.removeEventListener("click", activa2);
    btnAudio2.addEventListener("click", desactiva2);
}

function desactiva2() {
    audio2.pause();
    parrafo2.textContent = "▶";
    btnAudio2.removeEventListener("click", desactiva2);
    btnAudio2.addEventListener("click", activa2);
}


const btnAudio3 = document.querySelector(".btn-audio3");
const audio3 = document.querySelector(".btn-audio3 audio");
const parrafo3 = document.querySelector(".btn-audio3 p"); 

btnAudio3.addEventListener("click", activa3);

function activa3() {
    audio3.play();
    parrafo3.textContent = "⏸";
    btnAudio3.removeEventListener("click", activa3);
    btnAudio3.addEventListener("click", desactiva3);
}

function desactiva3() {
    audio3.pause();
    parrafo3.textContent = "▶";
    btnAudio3.removeEventListener("click", desactiva3);
    btnAudio3.addEventListener("click", activa3);
}








var logoGithubCabecalho = document.querySelector(".cabecalhoPrincipal-nav-img-github");

var piano = document.querySelector(".hobbies-piano");

var notas = document.querySelector(".hobbies-notas");


logoGithubCabecalho.addEventListener("click", function(){
    window.open("https://www.github.com/oliveiradeigor", "_blank");
});


piano.addEventListener("click", function () {
    var somFundo = new Audio('assets/song/yann.mp3');
    somFundo.play();

    notas.classList.remove("visibilidade");

    window.setTimeout(mostrarNotas, 54000);
});


document.body.addEventListener('click', function () {
    somFundo.stop();
})


function mostrarNotas(){
    notas.classList.add("visibilidade");
}


/*
const somMoveBtn = new Audio('./song/acertou.wav');
//const vitoria = new Audio('./songs/vitoria.mp3')


document.body.addEventListener('click', function () {
    entradaJogo()
})

function entradaJogo() {
    // inicioJogo.muted = false
    somFundo.play()
    somFundo.loop = true;
}

*/
// função apenas com onclick no HTML onclick="playSound('som_tecla_pom')"
// function playSound(soundType) {
//     var soundKey = document.getElementById(soundType).play();
// }


function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        } else if (evento.code != 'Tab') {
            console.log('Tecla inválida. User ENTER ou ESPAÇO')
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

//https://www.wowhead.com/sounds/name:Benedictus
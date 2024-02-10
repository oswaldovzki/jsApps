var jogosAlugados = 0;

function alterarStatus(gameId) {
    var gameClicado = document.getElementById(`game-${gameId}`);
    var imagem = gameClicado.querySelector(".dashboard__item__img");
    var btn = gameClicado.querySelector(".dashboard__item__button");
    var nomeJogo = gameClicado.querySelector(".dashboard__item__name").textContent;

    if (btn.classList.contains("dashboard__item__button--return")) {
        confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo}?`)
        btn.classList.remove("dashboard__item__button--return");
        btn.textContent = 'Alugar';
        imagem.classList.remove("dashboard__item__img--rented");
        jogosAlugados--;
    } else {
        confirm(`Você tem certeza que deseja alugar o jogo ${nomeJogo}?`)
        btn.classList.add("dashboard__item__button--return");
        btn.textContent = 'Devolver';
        imagem.classList.add("dashboard__item__img--rented");
        jogosAlugados++;
    }
    
    if (btn.textContent == 'Alugar') {
        var rent = 'Disponibilizado'
    } else {
        var rent = 'Alugado'
    }

    contarEExibirJogosAlugados();
    console.log(`O jogo ${nomeJogo} foi ${rent}.`);
}



function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

//Função principal da aplicação
function drawLots() {
    var qtyNumber = parseInt(document.getElementById('qtyNumber').value);
    var fromNumber = parseInt(document.getElementById('fromNumber').value);
    var toNumber = parseInt(document.getElementById('toNumber').value);

    var drawedList = [];
    var drawedNumber;

    if (fromNumber >= toNumber) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      } else if (qtyNumber > (toNumber - fromNumber + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

    for (let i = 0; i < qtyNumber; i++) {
        var drawedNumber = randomNumber(fromNumber, toNumber);

        while (drawedList.includes(drawedNumber)) {
            var drawedNumber = randomNumber(fromNumber, toNumber);
        }

        drawedList.push(drawedNumber);
    }

    drawedList.sort((a, b) => a - b);

    let result = document.getElementById('result')
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${drawedList}</label>`

    changeBtnStatus()

    console.log(`Quantidade de Números Sorteados: ${qtyNumber}
        Do número: ${fromNumber}
        Até o número: ${toNumber}
        Números sorteados: ${drawedList}`);
}

//função de sortear um numero aleatorio
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//função para habilitar o botao de reset

function changeBtnStatus() {
   var button = document.getElementById('btnReset');
    if (btnReset.classList.contains('container__botao-desabilitado')) {
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    } else {
        button.classList.add('container__botao-desabilitado');
        button.classList.remove('container__botao');
    }
}

//função para reiniciar o app
function reset() {
    document.getElementById('qtyNumber').value = '';
    document.getElementById('fromNumber').value = '';
    document.getElementById('toNumber').value = '';
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`
    changeBtnStatus()
}
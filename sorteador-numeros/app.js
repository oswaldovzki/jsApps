//Função principal da aplicação
function drawLots() {
    var qtyNumber = parseInt(document.getElementById('qtyNumber').value);
    var fromNumber = parseInt(document.getElementById('fromNumber').value);
    var toNumber = parseInt(document.getElementById('toNumber').value);

    var drawedList = [];
    var drawedNumber;

    for (let i = 0; i < qtyNumber; i++) {
        var drawedNumber = randomNumber(fromNumber,toNumber);
        drawedList.push(drawedNumber)
    }

    console.log(`Quantidade de Números Sorteados: ${qtyNumber}
        Do número: ${fromNumber}
        Até o número: ${toNumber}
        Números sorteados: ${drawedList}`);
}

//função de sortear um numero aleatorio
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var qtdPista = document.getElementById('qtd-pista').textContent;
var qtdSuperior = document.getElementById('qtd-superior').textContent;
var qtdInferior = document.getElementById('qtd-inferior').textContent;

//Compra de Ingressos
function comprar() {
    var ticketType = document.getElementById('tipo-ingresso').value;
    var ticketQtd = document.getElementById('qtd').value;

    if (ticketQtd <= 0 || ticketType == '') {
        alert('Selecione um tipo válido de ingresso ou uma quantidade superior a 0');
        return;
    }

    if (ticketQtd > qtdPista && ticketType == 'pista') {
        alert(`Quantidade de ingressos indisponível. No momento, temos:
        Pista: ${qtdPista}`);
        return;
    } 

    if (ticketQtd > qtdSuperior && ticketType == 'superior') {
        alert(`Quantidade de ingressos indisponível. No momento, temos:
        Superior: ${qtdSuperior}`);
        return;
    } 

    if (ticketQtd > qtdInferior && ticketType == 'inferior') {
        alert(`Quantidade de ingressos indisponível. No momento, temos:
        Inferior: ${qtdInferior}`);
        return;
    } 

    //Printar no Console a quantidade comprada e limpar o resultado anterior
    console.log(`Quantidade de ingressos "${ticketType}" comprada foi ${ticketQtd}`);
    
    //Calcular Quantidade Restante
    if (ticketType == 'pista') {
        qtdPista = qtdPista - ticketQtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
    } else if (ticketType == 'inferior') {
        qtdInferior = qtdInferior - ticketQtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    } else {
        qtdSuperior = qtdSuperior - ticketQtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }

    console.log(`Quantidades de Ingressos restantes:
    Pista: ${qtdPista}
    Superior: ${qtdSuperior}
    Inferior: ${qtdInferior}`);

    clearFields();
}

//validação de quantidade disponivel

//Limpar campos
function clearFields() {
    document.getElementById('tipo-ingresso').value = '';
    document.getElementById('qtd').value = '';
}

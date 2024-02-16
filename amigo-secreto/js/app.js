var friendList = [];

function adicionar() {
    var friendName = document.getElementById('nome-amigo').value;
    
    if (friendName == '') {
        alert('PAM!');
    } else if (friendList.includes(friendName)) {
        alert('O nome ja existe. insira também um sobrenome');
    } else {
        friendList.push(friendName);
        document.getElementById('nome-amigo').value = '';
    }
    
    //Adicionar nomes no campo
    var friendsName = document.getElementById('lista-amigos');
    friendsName.innerHTML = friendList.sort();
}

function sortear() {
    if (friendList.length < 3) {
        alert('Quantidade invalida de integrantes. Necessario pelo menos 3 participantes.');
        return;
    }
    
    embaralha(friendList);
    var sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < friendList.length; i++) {
        if (i == friendList.length -1) {
            sorteio.innerHTML = sorteio.innerHTML + friendList[i] + ' --> ' + friendList[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + friendList[i] + ' --> ' + friendList[i + 1] + '<br>';
        }
    }
}


function reiniciar() {
    friendList = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
    // location.reload();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

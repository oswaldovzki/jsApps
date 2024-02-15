var friendList = [];

function adicionar() {
    var friendName = document.getElementById('nome-amigo').value;
    friendList.push(friendName);


    //Adicionar nomes no campo
    var friendsName = document.getElementById('lista-amigos');
    friendsName.innerHTML = friendList.sort();   
}

function sortear() {
    embaralha(friendList);

    console.log(friendList);
}


function reiniciar() {
    location.reload()
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

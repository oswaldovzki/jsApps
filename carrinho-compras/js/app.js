var totalPrice = 0;
limpar()

function adicionar() {
    //recuperar a quantidade e valor
    var getItem = document.getElementById('produto').value;
    var getName = getItem.split(' - ')[0];
    var getPrice = getItem.split('R$')[1];
    var getQuantity = document.getElementById('quantidade');
    
    //calcular o subtotal por produto
    var subtotal = getQuantity.value * getPrice;

    //adicionar ao carrinho
    var addCart = document.getElementById('lista-produtos');
    addCart.innerHTML = addCart.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${getQuantity.value}x</span> ${getName} <span class="texto-azul">R$${subtotal}</span>
    </section>`

    console.log(`${getQuantity.value} unideades de ${getName} foram adicionadas ao carrinho, totalizando R$${subtotal}`);

    //valor total
    totalPrice = totalPrice + subtotal;
    var totalPriceField = document.getElementById('valor-total');
    totalPriceField.textContent = `R$${totalPrice}`

    getQuantity.value = 0
}

function limpar() {
    totalPrice = 0
    document.getElementById('valor-total').textContent = 'R$0';
    var addCart = document.getElementById('lista-produtos');
    addCart.innerHTML = '';
}


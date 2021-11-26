const precos = ['10', '20', '45'];

//const precosEmReais = precos.map(function(preco) {
//    return 'R$ ' + preco + ',00';
//});

const precosEmReais = precos.map((preco => 'R$ ' + preco + ',00'));

console.log(precosEmReais);

const acimaDeVinte = precos
    .filter(preco => preco > 20)
    .map((preco => 'R$ ' + preco + ',00'
    ));
console.log('Acima de R$20,00: ' + acimaDeVinte);
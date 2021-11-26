const precos = ['10', '20', '45'];

const acimaDeVinte = precos
    .filter(preco => preco > 20)
    .map(preco => `R$ ${preco},00`);
    //.map((preco => 'R$ ' + preco + ',00'));

    console.log('Acima de R$20,00: ' + acimaDeVinte);
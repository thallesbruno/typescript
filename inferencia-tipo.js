var quantidade = 20;
//quantidade = 'teste'; não compila pois quantidade é number
var x = [1, 2, null];
//x[0] = true; não compila
//Contextual Type
window.onmousedown = function (evento) {
    console.log(evento.button); //ok
    /*
    console.log(evento.buton); agora compila,
    pois altera para any automaticamente
    */
};

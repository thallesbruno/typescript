//var, let e const
//var
//let
function iniciarTime(iniciaJogoEmGoiania) {
    //hoisting
    var nome = 'Messi e amigos';
    var cidade = 'no Faina';
    if (iniciaJogoEmGoiania) {
        cidade = 'em Goiânia';
    }
    //nome = 'Teste'; dará erro pois nome é const
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(true);

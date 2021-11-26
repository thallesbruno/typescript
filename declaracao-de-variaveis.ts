//var, let e const

//var
//let
function iniciarTime(iniciaJogoEmGoiania: boolean) {
    //hoisting
    const nome: string = 'Messi e amigos';
    let cidade: string = 'no Faina';

    if(iniciaJogoEmGoiania) {
        cidade = 'em Goiânia';
    }

    //nome = 'Teste'; dará erro pois nome é const

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(true);
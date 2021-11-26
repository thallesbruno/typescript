interface Pessoa {
    idade: number;
    sexo?: string;
}

function imprimirIdade(pessoa: Pessoa){
    console.log(pessoa.idade);
}

let thallesBruno = {nome: 'Thalles Bruno', idade: 32, sexo: 'M'};

imprimirIdade(thallesBruno);
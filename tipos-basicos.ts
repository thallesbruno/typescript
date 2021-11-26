//boolean
let estaPago: boolean = true;
estaPago = false;

//number
let idade: number = 20;
let valor: number = 3.5;

//string
let empresa: string = 'Feanor Sistemas';
//Template Strings
let nome: string = 'João';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);
let concatenacaoTradicional = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + '.';

//arrays
let notas: number[] = [8, 7, 4, 9];

//tuple
let alunos: [string, number, string] = ['Jonas', 10, 'Química'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//Enum
enum Cor {Verde, Amarelo, Vermelho};
let corFundo: Cor = Cor.Verde;

//Any
let algumValor: any = 4;
algumValor = 'Agora é uma string';
algumValor = false;

//motivos para usar Any:
//Biblioteca de terceiros...
//Migração de JavaScript para Typescript...
//Array com vários tipos de dados

//void
function alerta(): void {
    //...alert('Operação inválida');
}

//null e undefined -> não faz muito sentido!
let u: undefined = undefined;
let n: null = null;
//null e undefined são subtipos dos outros tipos
nome = undefined;
nome = null;


//boolean
var estaPago = true;
estaPago = false;
//number
var idade = 20;
var valor = 3.5;
//string
var empresa = 'Feanor Sistemas';
//Template Strings
var nome = 'João';
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
var concatenacaoTradicional = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + '.';
//arrays
var notas = [8, 7, 4, 9];
//tuple
var alunos = ['Jonas', 10, 'Química'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Vermelho"] = 2] = "Vermelho";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
//Any
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = false;
//motivos para usar Any:
//Biblioteca de terceiros...
//Migração de JavaScript para Typescript...
//Array com vários tipos de dados
//void
function alerta() {
    //...alert('Operação inválida');
}
//null e undefined -> não faz muito sentido!
var u = undefined;
var n = null;
//null e undefined são subtipos dos outros tipos
nome = undefined;
nome = null;

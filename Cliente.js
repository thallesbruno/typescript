var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
//let x: number = 10;
var joao = new Cliente('João', 32);
var apresentacao = joao.apresentar();
console.log(apresentacao);
var maria = new Cliente('Maria', 56);
console.log(maria.apresentar());

class Cliente{

    nome: string;
    idade: number;

    constructor(
        nome: string,
        idade: number){
            this.nome = nome;
            this.idade = idade;
    }

    apresentar(){
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
    } 
}

//let x: number = 10;

let joao: Cliente = new Cliente('João', 32);
let apresentacao = joao.apresentar();
console.log(apresentacao);

let maria: Cliente = new Cliente('Maria', 56);
console.log(maria.apresentar());



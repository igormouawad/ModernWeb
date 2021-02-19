/*
 * Classe com contructor e arguments
 */

// Aqui tem uma disvantagem, o this pode mudar dependendo do contexto,
// retornado valores como undefine ...
// Classe
class Pessoa {

    constructor() {
            this.nome = arguments[0];
        }
        falar()
        {
        console.log(`Meu nome é ${this.nome}`);
    }
}

//Factory
const pessoa = new Pessoa("Igor Maikel Mouawad");
pessoa.falar();

const x = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = x("saijdisaj");
p2.falar();
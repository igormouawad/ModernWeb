/*
 * Chamando funcao com call e apply podemos determinar o contexto em que a função executara
 */

function getPreco(a=0,b="R$") {
    return `${b} - ${a} - ${this.b} - ${this.c}`
}

const Produto = {
    nome: 'Notebook',
    b: 21312,
    c:  0.23,
    getPreco
};

global.b = 22;
global.c = 33;
console.log(getPreco());

//
console.log(Produto.getPreco()); // getPreco vai usar as variaveis b e c do contexto global


const carro = {b: 44 , c: 55}

//Chamando getPreco com call, o primeiro parametro sempre é o contexto, o outros são os paramentros da funcao getPreco em sequencia
console.log(getPreco.call(carro, 1 , '$'));
//Chamando getpreco com apply, o primeiro paramentro sempre é o contexto, verifique que com apply os paramentros de getPreco são passado em um array
console.log(getPreco.apply(carro, [2,"gg"]));
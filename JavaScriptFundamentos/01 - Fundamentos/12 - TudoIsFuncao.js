// Tudo em JS é function
// Objeto é function
console.log("Objeto é uma", typeof Object);

// Criando a função soma sem retorno recebendo a e b
function soma(a, b) {
    console.log(a + b);
}
console.log("soma(10,12) =", soma(10,12)); // O retorno de soma é undefined, perfeito é uma function sem retorno




// Criando uma função soma2 com retorno recebendo a e b
const soma2 = function (a,b) {
    return (a + b);  
};
console.log("soma2(10,12) =", soma2(10,12)); // Agora sim a function soma2 retorna uma valor

// Armazenamento de uma função Arrow em uma variavel
const somaArrow = (a,b) => {
    return a + b;
};

// Armazenamento de uma função Arrow reduzida em uma variavel
const ArrowReduzida = (a,b) => a * b;

console.log("\nLeia o código fonte");
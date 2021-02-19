// Criando a função soma sem retorno recebendo a e b
console.log("O que acontece aqui é interessante -------------------------------------------------------------------------------")
function soma(a, b) {
    console.log(a + b);
}
console.log(`\nCriando uma função
function soma(a, b) {
    console.log(a + b);
}

O nome da função é soma e ela recebe os atributos a e b e não retorna nada, apenas imprime da tela a soma de a + b

soma adasdas = ${soma(10,12)}
!!! IMPORTANTE !!! verique que o valor impreço não foi dentro da templateString pois ele não retorna o valor, ele imprime no console
`);
console.log("------------------------------------------------------------------------------------------------------------------")

// Criando uma função soam2 com retorno recebendo a e b
console.log("Já está função retorna o valor então ele é impresso dentro da templateString e não onde foi declarado a function")
const soma2 = function (a,b) {
    return (a + b);  
};
console.log(`Armazerna uma função em uma variavel
const imprimirSoma = function (a,b) {
    console.log(a + b);  
};
imprimirSoma(2,5) = ${soma2(2,5)}
`);
// Declarar uma variavel com var tem apenas dois escopos possiveis (global ou window) e o escopo de uma function

// Exemplo de var dentro de uma function, a variavel varFunction, neste caso, não é global
function escopoFunction() {
    var varFunction = "global";
}

// Se voce descomentar a linha a seguir o JS/Node lançara um erro, pois a variavel varFunction so pode ser acessada dentro do escopo da function, fora este caso elas são sempre globais
//console.log(varFunction);


// Declarar uma variavel com let restringe o seu acesso ao escopo em que ela foi declarada
{
    let _let = "dentro do escopo"; //So é acessada dentro deste escopo
}
let _let = "fora do escopo";

console.log(`Veja que o valor impresso aqui é o ${_let}` );

console.log("\nLeia o código fonte");
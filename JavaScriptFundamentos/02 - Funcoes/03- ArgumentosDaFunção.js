/*
 * Usando o arguments, é um dado que toda função tem, ele é um array
 */
function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(1,1,1));
console.log(soma(1,2,3));
console.log(soma(1,1,"igor","maikel"));

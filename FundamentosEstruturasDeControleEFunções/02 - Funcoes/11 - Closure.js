/*
 * Closure é o escopo criado quando uma função é declarada
 */
const valor = "Global";

function f1() {
    console.log("f1",valor);
};

function f2() {
    const valor = 'dsaddsa';
    f1();
}
f2()


const x = "GLOBAL"

function fora() {
    const x = "Local";
    function dentro() {
        return x;
    }
    return dentro();
}
//Chamando a função fora diretamente
console.log(fora());

//Chamando a função armazenada em uma constante
const k = fora();
console.log(k);


/*
 * Funcoes Callback
 */
const fab = ["WV", "Fiat", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1} ${nome}`);
}

//ForEach
//a função imprimir é chama pelo foreach como calback, veja que forEach recebe um dado do tipo callback
fab.forEach(imprimir);


const notas = [7, 6, 5, 8, 3, 7, 9];

let notasBaixas = [];


//Filter
//Criando a função Callback separadamente
function pegaNotasBaixas(n = 0) {
    if (n < 7) {
        return true;
    } else {
        return false;
    }
}
notasBaixas = notas.filter(pegaNotasBaixas);
console.log(notasbaixas);

//Criando a função Callback direto no paramentro do filter
notasbaixas = notas.filter(function(nota){
    return nota < 7;
});
console.log(notasbaixas);

//Criando a função ARROW Callback direto no paramentro do filter
notasbaixas = notas.filter((nota) => nota < 7);
console.log(notasbaixas);

//Exemplo callback dentro do brwoser
// executar no JS
//document.getElementsByTagName('body')[0].onclick = function (e) {
//    console.log("0 evento occou");
//};
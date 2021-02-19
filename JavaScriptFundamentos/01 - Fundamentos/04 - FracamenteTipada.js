/*
 * JS é fracamente tipado, as variaveis podem mudar de tipo a qualquer momento
 */

// A variavel aux é uma string
let aux = "";
aux = "A variavel aux é uma " + typeof aux;
console.log(aux);

// A variavel aux mudou seu tipo para Number
aux = 18.10;
aux = "A variavel aux mudou o tipo para " + typeof aux;
console.log(aux);


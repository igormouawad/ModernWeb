/*
 * JS Tipo Number e Classe Number
 */

 // Declara as constantes C1, C2 e C3
const C1 = 1.0;
const C2 = 1.1657;
const C3 = Number("2.3");

// Imprime as constantes no console
console.log(`C1=${C1}
C2=${C2}
C3=${C3}`);

// Verifica se as constantes são do tipo integer
console.log("\nC1 é integer =", Number.isInteger(C1));
console.log("C2 é integer =", Number.isInteger(C2)); 
console.log("C3 é integer =", Number.isInteger(C3)); 

// Declarando uma variavel com let e define seu valor como a soma de C1 + C2 + C3
let total = C1 + C2 + C3;
// Imprime no console
console.log("\nTotal =", total);

//Divide a variavel total por 2 e define o resultado nela mesma
total = total / 2;
// Imprime no console
console.log("\nTotal =", total);

//Imprime no console limitnado o valor a 2 casas decimais
console.log("\nTotal =", total.toFixed(2));

//Veja a diferença do tipo de um Number instaciando e a Classe Number
console.log("A instancia de um Number é", typeof total);
console.log("O objeto Number é do tipo", typeof Number);

// JS tem o tipo Infinity
console.log("\nJS tem o tipo", 1 / 0);  //Divisão por ZERO retorna tipo Infinity
console.log("JS tem o tipo", "as" / 0); //String não é um numero retorna NaN

// JS é fracamente tipada, estamos dividindo uma string por um integer
console.log("10" / 2);

// JS vou chamar isso de um cast, mas se fosse uma string nao funcionaria
console.log((10.1).toFixed(2));

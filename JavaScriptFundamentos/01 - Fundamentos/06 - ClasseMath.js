/*
 * JS Tipo classe Math
 */

 // Declarando variavel raio e area, area define seu valor em uma expreção matematica onde é usado functions do objeto Math para realizar os calculos
const raio = 5.6;
const area = Math.PI + Math.pow(raio, 2); //Note que o objeto Math esta sendo usado

console.log("Resultado da expreção (Math.PI + Math.pow(raio, 2)) é", area);

// Curiosidade Math é do tipo objeto, e objeto é do tipo function (Tudo em JS é function)
console.log("Math é do tipo", typeof Math)
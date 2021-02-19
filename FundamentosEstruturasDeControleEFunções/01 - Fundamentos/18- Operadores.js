/*
 * Operadores em JS e seus comportamentos
 */
const a = 7;
let  b = 3;

b += a; // b = b + a
console.log(b);

b -= 4; // b = b - 4
console.log(b);

b *= 2; // b = b * 2
console.log(b); 

b /= 2; // b = b / 2
console.log(b);

b %= 2; // b = b % 2
console.log(b);

//Operador Destructing
const [x, y, z] = [1, 2, 3];

//Operador Atiritimetico
const soma = x + y + z

//Operadores Aritrimetrico relacionais
console.log('1' == 1); //um string é igual a 1 inteiro SIM
console.log('1' === 1); //um string é STRITAMENTE igual a 1 inteiro NÃO

console.log(undefined == null);
console.log(undefined === null);
console.log(typeof undefined);
console.log(typeof null);

//Operadores Condicionais
function compras(t1,t2) {
    const c1 = t1 || t2;
    const c2 = t1 && t2;
    const c3 = t1 != t2;
    const c4 = !c1;
     return {c1, c2,c3,c4};
    
}

console.log(compras(true,true));

//Operadores Unarios
let num1 = 1;
let num2 = 2;

console.log(num1++);
console.log(++num1);

//Operador ternario
let n1=1;
let n2=2;

//Funcao comum com operador
function abc(x,y) {
    return x > y ? "Sim" : "Não";
}
//Arrow functuion com operador
const r2 = (x,y) => x > y ? "Sim" : "Não";
console.log(r2(3,2));

console.log(abc(3,2));
console.log(n1 > n2 ? "Sim" : "Não");
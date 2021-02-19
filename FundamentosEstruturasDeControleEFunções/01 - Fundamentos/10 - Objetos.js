// Cria um objeto vazio e adiciona dinamicamente atributos a ele
const myObject = {};
myObject.id = "01";
myObject.valor = 10.56;
myObject['obs'] = "opa pera ai";

//Imprime o objeto criado
console.log("\nImprimindo o objeto criado")
console.log(myObject);

/*
 * IMPORTANTE - Não consigo imprimir um objeto usando templateString
 */

// Curiosidades
console.log(`\nCuriosidades
myObject = ${console.log(myObject)}
typeof Object = ${console.log(myObject)}
typeof new Object() = ${typeof new Object()}
`)


/*
 * JS Tipo boolean
 */
//Instanciando o tipo boolean devarias formas
let isCool = true;
let x = false;
let isEasy = 1;
let z = true;

console.log(`\nAlguns teste binarios interessantes que dao true 
!!3 = ${!!3}
!![] = ${!![]}
!!" " = ${!!" "}
!!Math = ${!!Math}
!!{} = ${!!{}}
`);



console.log(`\nAlguns teste binarios interessantes que dao false
!!0 = ${!!0}
!!"" = ${!!""}
!!null = ${!!null}
!!NaN = ${!!NaN}
!!undefined = ${!!undefined}
`);

let teste="";
console.log(`\nMais alguns teste binarios interessantes
teste || "Vazia" = ${teste || "Vazia"}
teste && "AND" = ${teste && "AND"}
teste === "AND" = ${teste === "AND"}
teste === "AND" = ${teste !== "AND"}
`);


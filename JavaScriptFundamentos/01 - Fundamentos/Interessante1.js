// Estrutura de repetições com var, a variavel fica esposta em um escopo global
var funcsVar = [];
for(var i=0; i<10;i++){
    funcsVar.push(function(){
        return i;
    });
}

// Por isso podemos acessar seu valor fora do for
console.log(`Valor de i = ${i}`);
// E tambem por isso as function armazenadas no array retorna o valor de i global, que é o valor da ultima iteração
console.log(`Valor de i = ${i}
funcsVar[2] = ${funcsVar[2]()}
funcsVar[9] = ${funcsVar[9]()}`);



//Estrutura de repetições usando let respeita o escopo
var funcsLet = [];
for(let i=0; i<10;i++){
    funcsLet.push(function(){
        return i;
    });
}
// Não conseguimos acessar o i declarado com let fora do escopo da Estrutura de repetição
// Temos valores distintos pra cada function armazenada no array
console.log(`funcsLet[2]() = ${funcsLet[2]()}
funcsLet[9]() = ${funcsLet[9]()}`);
console.log(``);

console.log("\nLeia o código fonte");

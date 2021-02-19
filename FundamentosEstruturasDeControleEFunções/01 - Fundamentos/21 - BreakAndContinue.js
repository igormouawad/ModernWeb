//Estrutura de repeticao com break é interrompida
const l = [1,2,3,4,5,6,7,8,9];
for(let i in l) {
    if (i == 3) break;
    console.log(`${i} = ${l[i]}`);
}

console.log("\n");

//Estrutura de repetição com continue é pulada a interação para aproxima
for(let i in l) {
    if (i == 3) continue;
    console.log(`${i} = ${l[i]}`);
}

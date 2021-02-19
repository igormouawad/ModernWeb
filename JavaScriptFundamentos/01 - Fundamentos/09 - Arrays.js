// Declarando um array constante de strings
const a = ["igor","maikel","mouawad"];

// Removendo, do array, o ultimo item adicionado
a.pop();

// Adiciona ao array um item
a.push("item1");

// Iterando um array
for(i=0;i<a.length;i++) {
    console.log(`a[${i}] = ${a[i]}`);
}
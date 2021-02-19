//Criando uma função anonima e armazenado em uma variavel
const soma = function (x,y) {return x+y};
console.log(soma(1,2));

//Passando soma como parametro kkkk
const imprimi = function(a,b,operacao = soma) {
    console.log(operacao(a,b));
}
imprimi(2,3)

//Passando uma nova função anonima , que vai substituir a função padrao soma 
imprimi(10,2, function (x,y) {return x/y})

//Passando uma função arrow por parametro (toda função arrow é anonima)
imprimi(2,3, (x,y) => x*y);


//Criar um objeto onde um dos atributos vai receber uam função
const Pessoa = {
    idade: ((x,y) => x+y),
    nome: "igor"
};
//
console.log(Pessoa.idade(5,6));
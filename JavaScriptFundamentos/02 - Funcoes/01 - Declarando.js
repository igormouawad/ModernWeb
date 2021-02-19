// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Pode passar função como parametro
// Pode ser armazenada em uma variavel
// Pode ter outra função dentro dela

//Toda função em JS retorna algo, pelomenos undefine se ela não tiver falor


//Declarar de forma literal
function funcao1() {
    
}

//Armazenar em uma variavel
const funcao2 = function () {};

//Armazenar em um array
const array = [function a(a, b) { return a + b},function b () {}];
console.log(array[0](1,2));

//Armazenar função em um atributo de um objeto
const objeto = new Object();
objeto.func = function(a,b) {return a + b};
console.log(objeto.func(2,5));




//Passando função como parametro
function a(fun) {
    fun();
}

a(function () {console.log("Passando função como parametro");})

const b = function() {
    console.log("Passando função como parametro2");
}

a(b);

// Uma função pode retornar/conter uma função
function s1(a,b) {
    return function s2(c) {
        return a + b+ c;
    }
}
console.log(s1(1,2)(3));
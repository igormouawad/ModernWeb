/*
 * Destructing em objetos
 */
const obj1 = {
    nome: "Igor",
    idade: 35,
    endereco: {
        logradouro: "Rua 1",
        numero: 182
    }
};

// estraindo os atributos nome e idade do objeto pessoa com operador destructing { }
const {nome, idade} = obj1;
console.log(`nome=${nome} | idade=${idade}`);

// Estraindo o objeto endereco de dentro do objeto pessoa com o operador destructing { }
const {endereco} = obj1;
console.log("endereco.logradouro =", endereco.logradouro);

// Estraindo os atributos do objeto endereco que fica dentro do objeto pessoa
const {endereco: {logradouro: l, numero: n}} = obj1;
console.log(l, n);

/*
 * Destructing em arrays
 */
const array1 = [10,11,12];
const [,b,c] = array1;
console.log(b,c);

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
};

const obj = {min: 40, max: 50};
console.log(rand(obj));



/*
 * Destructing em funcoes
 */
function fObjeto({z = 100}) {
    console.log("z =  ", z);
}
fObjeto({z: 10}); 
const obj2 = {z: 20};
fObjeto(obj2);


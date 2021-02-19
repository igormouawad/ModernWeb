/*
 * Funções Arrow
 */

//Função dobro (Modo comum de declarar)
let dobro = function(a) {
    return 2 * a;
};

//Função Arrow dobro 
dobro = a => {
    return 2 * a;
};

//Quando esta tudo em uma linha e não tem colchetes no corpo da funcao arrow o return fica implicito
const dobroArrow = a => a * 2;
console.log(dobroArrow(3));

//Funcao arrow sem paramentros
ola = () => "ola";
console.log(ola());

//Função arrow com um caracter especial, siginifica que pode ou nao passar o parametro
ola = _ => "ola"; // _ pode ou não passar parametro
console.log(ola());


//"this" dentro da funcão arrow tem contexto definido onde a função foi declara
//Todos this dessa função aponta pra Pessoa
function Pessoa() {
    this.idade = 0
    
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    },1000);
    
}

new Pessoa;


/*
 * Comparar this em uma função normal vs arrow
 */


//Função normal
let comparaComthis = function (param) {
    console.log(this === param)
};

comparaComthis(global)

const obj = {}
v1 = comparaComthis.bind(obj)
v1(global);
v1(obj);

//Função arrow
comparaComthisArrow = (param) => console.log(this === param);
comparaComthisArrow(global)
comparaComthisArrow(module.exports)
comparaComthisArrow(this)
/*
 * Essa tentativa de mudança de contexto não acontece, a regra da função Arrow
 * que associa ela a o contexto onde ela foi declarada PREDOMINA contra o bind
 */
v2 = comparaComthisArrow.bind(obj); // O bind não muda
comparaComthisArrow(obj)
comparaComthisArrow(module.exports)
comparaComthisArrow(this)


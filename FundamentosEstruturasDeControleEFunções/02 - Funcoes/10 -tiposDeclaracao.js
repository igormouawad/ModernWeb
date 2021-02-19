// as funcoes declaradas com function sao interpretadas em primeiro lugar 
// quando o codigo é executado, se não for armazenada em uma variavel

// Aqui ela É declarada no inicio da execução, podemos chamar ela antes da declaracao
//function declaration
function idiota(x, y) {
    return x + y;
};

// function expression
const f1 = function (x,y) {
    return x + y;
};
console.log(f1(1,2));

// named function expression
const f2 = function igor(x,y) {
    return x + y;
};
console.log(f2(1,2));

// Aqui ela nao é declarada no inicio da execução
// resumed function expression 
const f3 = function (x,y) { return x + y};
console.log(f3(1,2));

// arrow function
const f4 = (x,y) =>  x + y;
console.log(f4(1,2));
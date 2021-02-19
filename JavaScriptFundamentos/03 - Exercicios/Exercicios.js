/*
 *  01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 multiplicação e divisão desses valores.
 */

calculos = (a, b) => {
    console.log(`${a}+${b}=${a + b}`);
    console.log(`${a}-${b}=${a - b}`);
    console.log(`${a}*${b}=${a * b}`);
    console.log(`${a}/${b}=${a / b}`);
}

calculos(10, 2)

/*
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 triângulo).
 */

qualTriangulo = (a, b, c) => {
    if (a == b == c) {
        return "Equilatero";
    } else if (a == b || a == c || b == c & a == b || a == c || b == c) {
        return "Isocele";
    } else {
        return "Escaleno";
    }
}

console.log(`O triangulo é ${qualTriangulo(1, 2, 4)}`);

/*
 * 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */
function  poww(b, e) {
    return (Math.pow(b,e));
}

console.log(`base elevada a expoente = ${poww(2,2)}`);

/*
 * 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
        e o resto da divisão destes dois valores.
 */
function divresto(a,b) {
    console.log(a/b);
    console.log(Number((a/b) % 1));
}
divresto(3,2);

/*
 * 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
    seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
    importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
    que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
 */
function fixvalor( a= 0) {
    return a.toFixed(2);
}
console.log(fixvalor(0.1 + 0.2));

/*
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */


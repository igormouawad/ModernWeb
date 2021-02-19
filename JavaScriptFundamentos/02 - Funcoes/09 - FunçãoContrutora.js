/*
 * Funcoes Construturas são funções que pode ser instanciadas com a keyword new
 */

function Carro(velocidadeMax = 200, delta = 5) {
    //Atributo privado
    let velocidadeAtual = 0;
    //metodo publico
    this.acelera = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta;

        } else {
            velocidadeAtual = velocidadeMax;
        }
    }
    //metodos public
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
}

const uno = new Carro
uno.acelera();
uno.acelera();
uno.acelera();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);

ferrari.acelera()
ferrari.acelera()
ferrari.acelera()
ferrari.acelera()
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof uno);
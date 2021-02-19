//Função Construtora
function Pessoa(nome) {
    this.nome = nome;
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`);
    }
}
const pessoa = new Pessoa("Função Construtora");
pessoa.falar();


//Função Arrow Construtura
pessoa2 = (nome) => {
    falar = () => console.log(`Meu nome é ${nome}`);
};
const a = new Pessoa("Função Arrow Construtora");
a.falar();



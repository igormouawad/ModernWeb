console.log(typeof console);

const objt1 = {};
objt1.nome = "Bola";

console.log(objt1.nome);

function Obj(nome) {
    this.nome = nome;
}

const obj2 = new Obj("Igor");

console.log(obj2.nome);
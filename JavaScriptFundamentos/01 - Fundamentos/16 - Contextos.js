const a = "Opa"; // contexto lexico 1

function lala() {
    const saudacao = "OI"; // contexto lexico 2
    return saudacao;
};

const cliente = {
    nome: "Igor",
    idade: 35,
    peso: 90,
    endereco: {
        logradouro: "rua 21",
        nuemro: 182
    }
};

console.log(a);
console.log(lala());

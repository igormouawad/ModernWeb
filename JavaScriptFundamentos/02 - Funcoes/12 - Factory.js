// Factory function que retorna um objeto
// Factory simples
function criarPessoas(nome,sobrenome) {

    return {
        nome: !!nome ? nome : 'Ana',
        sobrenome: !!sobrenome ? sobrenome : "Silva"
        
    };
};

console.log(criarPessoas('Igor','Mouawad'));
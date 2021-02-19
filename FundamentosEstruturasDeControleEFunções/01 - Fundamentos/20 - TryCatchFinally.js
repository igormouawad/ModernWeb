// Exemplo simples de um Try/Catch/Finally
function minhaFuncao() {
    try {                   // Inicia o bloco do try
        throw new Error()   
    } catch (e) {           // Pega o erro na variavel e
        console.log(e);     
    } finally {             // Executa ao final de tudo, idependete de erro ou nao
        console.log("Finalizou");
    }
}

minhaFuncao();
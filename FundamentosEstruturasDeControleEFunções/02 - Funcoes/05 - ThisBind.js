/*
 * 1 - Quando se usa o this em uma function ele pode variar por causa do escopo
   2 - Quando se usa o this em uma function arrow o this é associado ao contexto no qual a função foi escrita
   **Um dos motivos de criar a função ARROW é o fato de que o this é associado ao contexto no qual a função foi escrita
 */
//


const pessoa = { 
    saudacao: "bomdia",
    falar() {
        console.log(this.saudacao);
    }
};

pessoa.falar();
const falar = pessoa.falar;
falar(); //Conflito entre paradgimas

//Usando o bind para definir o contexto sempre que eu chamar a função
const falardepessoas = pessoa.falar.bind(pessoa);
falardepessoas();

//Set interval executa a função repetidamente
setInterval(falardepessoas,1000);
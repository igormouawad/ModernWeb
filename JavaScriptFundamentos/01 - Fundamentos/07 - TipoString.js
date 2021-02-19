/*
 * JS Tipo String
 */

// Declarando 3 constantes
const a = "Igor|Maikel|Mouawad";
const b = "Nome:";
const c = "!";

//Algumas funções de string
console.log(`a.charAt(4) = ${a.charAt(4)}
a.charCodeAt(4) = ${a.charCodeAt(4)}
a.indexOf("|") = ${a.indexOf("|")}
a.substring(11) = ${a.substring(11)}
a.substring(4,11) = ${a.substring(4,11)}
a.replace("|",",") = ${a.replace("|",",")}
a.toUpperCase() = ${a.toUpperCase()}
`);

//Split
let aSplited = a.split("|");
for(i in aSplited) {
    console.log(aSplited[i]);
}

//Concatenando strings
console.log("Nome: ".concat(a).concat("!"));
console.log("Usando + Nome" + a + "!");

//TemplateString
const templateString = `
Isto é um templateString
############################################
${b} ${a} ${c} 
############################################`;
console.log(templateString);

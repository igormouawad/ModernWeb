//For
for (var i = 0; i < 10; i++) {
    console.log("For iteração numero", i);
}

//For com variaveis
for (var i = 0, max = 10; i < max; i++) {

}
//For/In
const arrayString = ["Igor", "Maikel", "Mouawad"];

for (var i in arrayString) {
    console.log("For iteração numero", i, "| valor=", arrayString[i]);
}

var continuar = true;
var i = 0;
//While
while (continuar) {
    console.log("while iteração", i);
    if (i == 5) {
        continuar = false;
    }
    i++;
}

continuar = true;
i = 0;
//Do-While
do {
    console.log("while iteração", i);
    if (i == 5) {
        continuar = false;
    }
    i++;
} while (continuar)
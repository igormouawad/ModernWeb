function area(l, a) {
    const area = l * a;
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}`);
    } else {
        return area;
    }
}

//Todas chamas de area são valias
console.log(area(3,10));
console.log(area(3));
console.log(area());
console.log(area(3,2,5));
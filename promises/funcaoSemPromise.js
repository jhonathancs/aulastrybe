function calcularDivisao(num1, num2) {
    if (num2 == 0) throw new Error('Nao pode ser feito uma divisao por zero');
    const result = num1 / num2;
    return result;
}
try {
    const result = calcularDivisao(10, 2);
    console.log("resultado:", result); 
} catch(e) {
    console.log("erro: ", e.message);
}

var name = "jhon";
console.log('ola, meu nome é %s e tenho 25', name);
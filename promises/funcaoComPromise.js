function calcularDivisao(num1,num2) {
    const promise = new Promise((resolve, reject) => {
        if (num2 == 0) reject (new Error ("nao posso dividir um numero por zero"));
        const resultado = num1 / num2;
        resolve(resultado); 
    });
    return promise;
}

calcularDivisao(8,0)
.then(result => console.log(result))
.catch(erro => console.log("erro: %s", erro.message))
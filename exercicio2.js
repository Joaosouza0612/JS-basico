function somarPares(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
        soma += numeros[i];
        }
    }
    return soma;
}

const soma = [10, 6, 4, 12, 20, 8];
console.log(somarPares(soma));
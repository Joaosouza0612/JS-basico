const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somarPares(arrayDeNumeros) {
    let soma = 0;

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] % 2 === 0) {
            soma += arrayDeNumeros[i];
        }
    }

    return soma;
}

console.log(somarPares(numeros));
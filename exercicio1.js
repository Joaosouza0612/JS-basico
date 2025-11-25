function encontrarMaiorNumero(array) {
    if (array.length === 0) {
        return null;
    }

    let maiorNumero = arr[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }

    return maiorNumero;
}

const numeros = [15, 8, 23, 4, 42, 16];
console.log(encontrarMaiorNumero(numeros));
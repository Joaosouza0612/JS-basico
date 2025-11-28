function encontrarMaiorNumero(numeros) {
    let numero = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numero){ 
            numero = numeros[i];
        }
    } 
    return numero;
}

const numero = [19, 5, 7, 8, 33, 2];
console.log(encontrarMaiorNumero(numero));
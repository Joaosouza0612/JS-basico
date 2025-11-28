function encontrarMaiorNumero(numeros) {
  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}

const numeros = [15, 8, 23, 4, 42, 16];

console.log(encontrarMaiorNumero(numeros));
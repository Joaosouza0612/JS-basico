function encontrarMaiorNumero(numeros) {
  if (numeros.length === 0) {
    return null; // ou poderia retornar "Array vazio"
  }

  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}
 
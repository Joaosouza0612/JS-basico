function encontrarMaiorNumero(array) {
  if (array.length === 0) {
    return null; 
  }

  let maior = array[0];
o
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]; 
    }
  }

  return maior;
}

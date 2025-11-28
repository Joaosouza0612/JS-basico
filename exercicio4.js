function contarVogais(texto) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    let caractere = texto[i].toLowerCase(); // garante que maiúsculas também contem

    if (
      caractere === "a" ||
      caractere === "e" ||
      caractere === "i" ||
      caractere === "o" ||
      caractere === "u"
    ) {
      contador++;
    }
  }

  return contador;
}
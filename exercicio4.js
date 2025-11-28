function contarVogais(texto) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    let caractere = texto[i].toLowerCase();

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
const texto = "Hello World! Programando em JavaScript.";
console.log(contarVogais(texto)); // 11

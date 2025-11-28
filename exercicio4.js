// Função para contar vogais (maiúsculas e minúsculas)
function contarVogais(texto) {
  const vogais = "aeiouAEIOU";
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
      contador++;
    }
  }

  return contador;
}

// Exemplo de entrada
const texto = "Hello World! Programando em JavaScript.";

// Saída esperada
console.log(contarVogais(texto)); // 11

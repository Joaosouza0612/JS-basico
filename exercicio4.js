const texto = "Hello World! Programando em JavaScript.";

function contarVogais(str) {
    let contador = 0;
    const vogais = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais(texto));
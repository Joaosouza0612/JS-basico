function contarVogais(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            contador += 1;
        }
        else {
            continue;
        }
    }
    return contador;
}
const texto = "Hello World! Programando em JavaScript.";
const numeroDeVogais = contarVogais(texto);

console.log(`Número de vogais em "${texto}": ${numeroDeVogais}`);
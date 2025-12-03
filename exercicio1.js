
const numeros = [15, 8, 23, 4, 42, 16];

function encontrarMaiorNumero(arrayDeNumeros) {
    
    if (arrayDeNumeros.length === 0) {
        return "Array vazio";
    }

    
    let maior = arrayDeNumeros[0];

    
    for (let i = 1; i < arrayDeNumeros.length; i++) {
        
      
        if (arrayDeNumeros[i] > maior) {
            maior = arrayDeNumeros[i]; 
        }
    }

    return maior;
}

console.log("O maior número é:", encontrarMaiorNumero(numeros));
// Função para encontrar o produto mais caro
function encontrarProdutoMaisCaro(produtos) {
  let maisCaro = produtos[0];

  for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].preco > maisCaro.preco) {
      maisCaro = produtos[i];
    }
  }

  return maisCaro;
}

// Exemplo de entrada
const produtos = [
  { nome: "Teclado Mecânico", preco: 350 },
  { nome: "Monitor Ultrawide", preco: 1500 },
  { nome: "Mouse Gamer", preco: 120 },
  { nome: "Webcam Full HD", preco: 200 }
];

// Saída esperada
console.log(encontrarProdutoMaisCaro(produtos));
// { nome: 'Monitor Ultrawide', preco: 1500 }

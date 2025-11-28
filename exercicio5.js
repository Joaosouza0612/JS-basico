function produtomc(produtos) {

  if (produtos.length === 0) return null;

  return produtos.reduce((maisCaro, atual) => {
 
    return atual.preco > maisCaro.preco ? atual : maisCaro;
  }); }


const produtos2 = [{ nome: "Notebook", preco: 4000 }, { nome: "Tablet", preco: 800 }];
console.log("\nSolução Mais Curta - Produto Mais Caro:");
console.log(produtomc(produtos2)); 

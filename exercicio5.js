function encontrarProdutoMaisCaro(produtos) {
  // Se o array estiver vazio
  if (produtos.length === 0) {
    return "Nenhum produto encontrado";
  }

  let maisCaro = produtos[0]; // começa assumindo que o primeiro é o mais caro

  for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].preco > maisCaro.preco) {
      maisCaro = produtos[i]; // atualiza se encontrar produto mais caro
    }
  }

  return maisCaro;
}
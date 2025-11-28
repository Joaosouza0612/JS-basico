function encontrarProdutoMaisCaro(produto) {
    let produtoMaisCaro = produto[0];
    for (let i = 0; i < produto.length; i++) {
        if (produto[i].preco > produtoMaisCaro.preco) {
            produtoMaisCaro = produto[i];
        }
    }
    return produtoMaisCaro;
}
const produtos = [
    { nome: "Teclado Mecânico", preco: 350 },
    { nome: "Monitor Ultrawide", preco: 1500 },
    { nome: "Mouse Gamer", preco: 120 },
    { nome: "Webcam Full HD", preco: 200 }];
console.log(encontrarProdutoMaisCaro(produtos));
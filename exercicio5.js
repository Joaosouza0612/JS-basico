const produtos = [
    { nome: "Teclado Mecânico", preco: 350 },
    { nome: "Monitor Ultrawide", preco: 1500 },
    { nome: "Mouse Gamer", preco: 120 },
    { nome: "Webcam Full HD", preco: 200 }
];

function encontrarProdutoMaisCaro(listaProdutos) {
    if (listaProdutos.length === 0) {
        return "Lista vazia";
    }

    let maisCaro = listaProdutos[0];

    for (let i = 1; i < listaProdutos.length; i++) {
        if (listaProdutos[i].preco > maisCaro.preco) {
            maisCaro = listaProdutos[i];
        }
    }

    return maisCaro;
}

console.log(encontrarProdutoMaisCaro(produtos));
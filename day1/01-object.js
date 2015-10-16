var produto = {
	codigo: 1,
	descricao: "Teste"
};

console.log(produto);

produto.emEstoque = true;
produto.preco = 12;
produto.detalhes = {};

console.log(produto);

produto.descricao = "Teste Modificado";

console.log(produto);

delete produto.emEstoque;

console.log(produto);

produto.detalhes.tamanho = "12x12x12";
produto.detalhes.peso = 15;

console.log(produto);
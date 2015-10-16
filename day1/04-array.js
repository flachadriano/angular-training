var produto = {
	codigo: 1,
	descricao: "Teste",
	emEstoque: true,
	detalhes: {}
};

produto.palavrasChave = ["Produto", "Teste", "Novo"];

console.log(produto);

produto.palavrasChaveQtd = function() {
	return this.palavrasChave.length;
};

console.log(produto.palavrasChaveQtd());

produto.incluirPalavraChave = function(palavra) {
	this.palavrasChave.push(palavra);
};

produto.incluirPalavraChave("Palavra");
console.log(produto.palavrasChave);

produto.apagarPalavraChave = function(palavra) {
	this.palavrasChave.splice(this.palavrasChave.indexOf(palavra), 1);
};

produto.apagarPalavraChave("Palavra");
console.log(produto.palavrasChave);
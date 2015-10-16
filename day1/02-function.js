var produto = {
	codigo: 1,
	descricao: "Teste",
	emEstoque: true,
	detalhes: {}
};

console.log(produto);

var imprimirDados = function() {
	for (var prop in this) {
		console.log(prop);
	}
};

produto.imprimirDados = imprimirDados;
produto.imprimirDados();

imprimirDados.call(produto);
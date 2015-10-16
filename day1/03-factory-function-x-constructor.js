var criarProduto = function(codigo, descricao, emEstoque, detalhes){
	return {
		codigo: codigo,
		descricao: descricao,
		emEstoque: emEstoque,
		detalhes: detalhes
	}
};

var produto = criarProduto(1, "Teste", true, {});

console.log(produto);

var Produto = function(codigo, descricao, emEstoque, detalhes){
	this.codigo = codigo;
	this.descricao = descricao;
	this.emEstoque = emEstoque;
	this.detalhes = detalhes;
};

var novoProduto = new Produto(2, "Novo Teste", true, {});

console.log(novoProduto);
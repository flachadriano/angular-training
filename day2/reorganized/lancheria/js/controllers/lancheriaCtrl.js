angular.module('lancheria').controller('lancheriaCtrl', function($scope) {
  $scope.itens = [
    {descricao: "Sardinha", preco: 12},
    {descricao: "Chopp", preco: 8}
  ];
  $scope.pedidos = [];
  $scope.campo = 'item';
  $scope.direction = false;

  $scope.adicionarPedido = function(pedido) {
    pedido.data = new Date();
    $scope.pedidos.push(pedido);
    delete $scope.pedido;
    $scope.pedidoForm.$setPristine();
  };

  $scope.removerPedido = function(pedidos) {
    $scope.pedidos = pedidos.filter(function(pedido) {
      return !pedido.selecionado;
    });
  };

  $scope.totalPedidos = function(pedidos) {
    return pedidos.reduce(function(acumulador, pedido) {
      return acumulador + (pedido.quantidade * pedido.item.preco);
    }, 0);
  };

  $scope.ordenarPor = function(campo) {
    $scope.campo = campo;
    $scope.direction = !$scope.direction;
  };
});

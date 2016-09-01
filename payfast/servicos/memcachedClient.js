var memcached = require('memcached');

var cliente = new memcached('localhost:11211', {
    retries: 10,
    retry: 10000,
    remove: true
});

cliente.set('pagamento-20', {'id':20}, 60000, function(erro){
  console.log('nova chave adicionada ao cache: pagamento-20');
});

cliente.get('pagamento-20', function(erro, retorno){
  if (erro || !retorno){
    console.log('MISS - chave nao encontrada');
  } else {
    console.log('HIT - valor: ' + JSON.stringify(retorno));
  }
});

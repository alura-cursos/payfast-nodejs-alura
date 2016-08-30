module.exports = function(app){
  app.get('/pagamentos', function(req, res){
    console.log('Recebida requisicao de teste na porta 3000.')
    res.send('OK.');
  });

  app.post('/pagamentos/pagamento', function(req, res){
    var pagamento = req.body;
    console.log(pagamento);
    res.send('OK.');
  });
}

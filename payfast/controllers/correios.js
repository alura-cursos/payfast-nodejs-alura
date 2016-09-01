module.exports = function(app){

  app.post('/correios/calculo-prazo', function(req, res){
    var dadosDaEntrega = req.body;

    var correiosSOAPClient = new app.servicos.correiosSOAPClient();
    correiosSOAPClient.calculaPrazo(dadosDaEntrega,
              function(erro, resultado){
                if (erro){
                  res.status(500).send(erro);
                  return;
                }
                console.log('prazo calculado');
                res.json(resultado);
              });

  });
}

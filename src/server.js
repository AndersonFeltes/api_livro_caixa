const app=requeri('../src/api');
app.use(function(req, res, next){
    next();
})
//define a porta onde será executada a API
let port=process.env.port || 3000; //define a porta
//iniciando a aplicação (servidor)
app.listen(port);
console.log("Iniciando o app na porta "+port);
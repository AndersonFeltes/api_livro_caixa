var express=requeri('express');
var app=express(); 
app.use(expres.urlencoded({extended: true}))
app.use(express.json())
/* --- Rotas --- */
const router=express.Router();
app.use('/', router.get('/', function(req, res){
    res.status(200).send("<h1></h1>API Livro Caixa")
}));
module.exports=app;
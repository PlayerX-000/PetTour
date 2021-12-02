   const express = require('express');

   const Trabalhadores = require('../models/Trabalhadores')
   
   const router = express.Router();
   
   const controllerUser = require("../controllers/UserController");

   const controllerPage = require("../controllers/PagesController");


/****************************************************************/

router.get('/',controllerPage.pageInd);

router.get('/pedidos',controllerUser.exibebdp);

router.get('/pesquisa',controllerPage.pagepq);

router.get('/cadastro',controllerPage.pageCad);

router.get('/cuidadores',controllerUser.exibebd);

router.get('/principal',controllerPage.pageInd);

router.get('/login',controllerPage.pageLog);

router.get('/mais',controllerPage.pageMai);

router.get('/suporte',controllerPage.pageSup);

router.get('/pagina_usuario',controllerPage.pageuser);

router.get('/criar_oferta',controllerPage.pageCo)

router.get('/criar_pedido',controllerPage.pageCp)

router.get('/ERROR',(req, res) => {res.render("ERROR")});

/****************************************************************/

router.post('/cuidadores',controllerUser.filtrousers);

router.post('/criar_oferta',controllerUser.usersalvaoferta);

router.post('/criar_pedido',controllerUser.usersalvapedido);

router.post('/login',controllerUser.userlogin);

router.post('/trabalhos',controllerUser.consultaofertauser);

router.post('/historico',controllerUser.consultahistoricouser);

router.post('/pedidos',controllerUser.pedidoscriados);

router.post('/pedidosbusc',controllerUser.pedidosbusca);

router.post('/cadastro', controllerUser.savebd);

router.post('/suport', controllerUser.envEmail);

router.post('/pagina_usuario', controllerUser.updatedadosuser);

router.post('/cidadedados', controllerUser.cidadedados);

router.post('/dadosusers', controllerUser.dadosdousuario);

router.post('/altimg', controllerUser.updateimguser);


/****************************************************************/

module.exports = router;


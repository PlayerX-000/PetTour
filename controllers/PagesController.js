/*******************RENDERIZA PAGINA INDEX**************************/

 exports.pageInd =  (req, res) => { 
    res.render("index",{
    titulo: "Principal",
    })
 }
 
/***************RENDERIZA PAGINA DO USUARIO(apos login)******************************/

 exports.pageuser =  (req, res) => { 
 const nulll=[];
   res.render("pagina_usuario",{
   titulo: "Pagina Usuario",
   ofertasuser: nulll
   })
}

/*************RENDERIZA PAGINA DE LOGIN*******************/

 exports.pageLog =  (req, res) => { 
 
    res.render("login",{
    titulo: "Login",
   text1: "",
   text2: ""
    })
 }

 /*************RENDERIZA PAGINA DE PEDIDOS*******************/

 exports.pagepedidos =  (req, res) => { 
 
   res.render("pedidos",{
   titulo: "Pedidos",
   })
}

/*************RENDERIZA PAGINA DE PESQUISA*******************/

 exports.pagepq =  (req, res) => { 
 
   res.render("pesquisa",{
   titulo: "Pesquisa",
   })
}
 
/***************RENDERIZA PAGINA MAIS SOBRE NOS****************************/

 exports.pageMai =  (req, res) => { 
 
    res.render("mais",{
    titulo: "Sobre Nós",
    })
 }

/***************RENDERIZA PAGINA DO SUPORT**************************/

 exports.pageSup =  (req, res) => { 
 
    res.render("suporte",{
    titulo: "Suporte",
    msg: ""
    })
 }

/*****************RENDERIZA PAGINA CRIAR OFERTA***************************/

 exports.pageCo =  (req, res) => { 
   res.render("criar_oferta",{
   titulo: "Criar",
   msg: ""
   })
}

/*****************RENDERIZA PAGINA CRIAR PEDIDO***************************/

exports.pageCp =  (req, res) => { 
   res.render("criar_pedido",{
   titulo: "Criar",
   msg: "",
   color: ""
   })
}

/****************RENDERIZA PAGINA CADASTRO************************/

 exports.pageCad =  (req, res) => { 
 
   res.render("cadastro",{
   titulo: "Cadastro",
   msg: "E-mail"

   })
}

/********************FIM*******************************/
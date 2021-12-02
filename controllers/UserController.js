
const fs = require('fs');
const nodemailer = require('nodemailer');
const Trabalhadores = require('../models/Trabalhadores')
const Pedidos = require('../models/Pedidos')
const User = require('../models/User')
const { response } = require('express');
const { Op, INTEGER, NUMBER } = require("sequelize");
const { pagepedidos } = require('./PagesController');
const { constants } = require('crypto');
const limitpedidos = 0;
const limitoferta = 0;


/**************************************************************************/

/***********************ENVIA USUARIO DE ACOORDO COM O EMAIL INFORMADO******************************/
exports.dadosdousuario = async (req, res) => {

/**************************VARIAVEIS**************************/

const Email = req.body.email;



/**************************CONSULTA**************************/

const up = await User.findAll({
  where: {
    email: Email
  }
})
/****************************************************/


/**************************CONVERTE PARA JSON**************************/

const final = JSON.stringify(up)

/**************************ENVIA OS DADOS**************************/

res.send(final)

}






  
/***********************CONSULTA TRABALHOS CADASTRADOS DO RESPECTIVO E-MAIL INFORMADO******************************/

exports.consultaofertauser = async (req , res) => {

/**************************VARIAVEIS**************************/

const email = req.body.email;
console.log("email:  "+email)
/****************************************************/



/**************************CONSULTA**************************/

  const resultadopesq = await Trabalhadores.findAll({
  where:{
     [Op.and]:[{
         email: email
     },{
         status: 1
  }]
  }
})


const resultadopesq2 = await User.findOne({
  where:{
         email: email
  }
})


console.log("***********user link*********")
console.log(resultadopesq2.dataValues.imgUrl)
console.log("***********trabalhos*********")
console.log(resultadopesq)
console.log("***********email*********")
console.log(email)

/**************************CONVERTE OS RESULTADOS EM JSON**************************/
let link = resultadopesq2.dataValues.imgUrl

 const data = ({link,resultadopesq})

 console.log("***********DATA2.0*********")
 console.log(data)

 
  const datares = JSON.stringify(data)
/**************************ENVIA OS DADOS JSON**************************/

  res.send(datares)

}





exports.consultahistoricouser = async (req , res) => {

  /**************************VARIAVEIS**************************/
  
  const email = req.body.email;
  console.log("email:  "+email)
  /****************************************************/
  
  
  
  /**************************CONSULTA**************************/
  
    const resultadopesq = await Trabalhadores.findAll({
    where:{
       [Op.and]:[{
           email: email
       },{
           status: 0
    }]
    }
  })
  
  
  const resultadopesq2 = await User.findOne({
    where:{
           email: email
    }
  })
  
  
  console.log("***********user link*********")
  console.log(resultadopesq2.dataValues.imgUrl)
  console.log("***********trabalhos*********")
  console.log(resultadopesq)
  console.log("***********email*********")
  console.log(email)
  
  /**************************CONVERTE OS RESULTADOS EM JSON**************************/
  let link = resultadopesq2.dataValues.imgUrl
  
   const data = ({link,resultadopesq})
  
   console.log("***********DATA2.0*********")
   console.log(data)
  
   
    const datares = JSON.stringify(data)
  /**************************ENVIA OS DADOS JSON**************************/
  
    res.send(datares)
  
  }



/***********************CONSULTA PEDIDOS CADASTRADOS A PARTIR DO E-MAIL INFORMADO******************************/

exports.pedidoscriados = async (req , res) => {

/**************************VARIAVEIS**************************/

const email = req.body.Email;

/****************************************************/

console.log(email)

/**************************FAZ A CONSULTA**************************/

  const resultadopesq = await Pedidos.findAll({
  where:{
     [Op.and]:[{
         email: email
     },{
         status: 1
  }]
  }
})

/**************************CONVERTE OS RESULTADOS DA PESQUISA EM JSON**************************/

  const objretorno = JSON.stringify(resultadopesq)

  /**************************ENVIA OS DADOS JSON**************************/
console.log(resultadopesq)
  res.send(objretorno)

}

/***********************ATUALIZA OS DADOS DO USUARIO******************************/

exports.updatedadosuser = async (req , res) => {

/**************************VARIAVEIS**************************/

const ID = req.body.iduser,
 name = req.body.name,
 sobrenome = req.body.sobrenome,
 email = req.body.email,
 senha = req.body.senha, 
 usuario = req.body.usuario,
 cep = req.body.cep,
 estado = req.body.estado,
 cidade = req.body.cidade,
 rua = req.body.rua,
 bairro = req.body.bairro

/**************************FAZ O UPDATE**************************/

 const datauser = await User.update({
 
   name, sobrenome, email, senha, usuario, cep, estado, cidade, rua, bairro

    },{

where:{

  id:ID
 
  }

    })

  /**************************PROCURA USER PELO ID**************************/

    const selectuser = await User.findOne({
    where:{
      id: ID
    }
      })

      /**************************ENVIA OS DADOS**************************/

      res.render("pagina_usuario",{
        titulo: "pagina usercdsa",
        arrayuser: selectuser})

}



/***********************ATUALIZA OS DADOS DO USUARIO******************************/

exports.updateimguser = async (req , res) => {

  console.log("estagio 1")
  /**************************VARIAVEIS**************************/
  
  const ID = req.body.idtrocimg;
  const email = req.body.emailtrocimg;
  const imgn = req.file.filename;

  const imgUrl = "/controllers/imgsusers/" + imgn



  const mud = imgn.replace('/imgsusers/IMG_','')
  /**************************FAZ O UPDATE**************************/

  console.log("estagio 2")

  console.log("**********************ESSE E O RESULT")
 


  const selectuser = await User.findOne({
    where:{
      [Op.and]:[{
      id: ID
      },{
        email: email
      }]
    }
      })

      const nomeimgant = selectuser.dataValues.imgUrl

      const finali = nomeimgant.replace("controllers/","")

      const comp = "/imgsusers/"+imgn
      console.log(finali)
      console.log(comp)

      if(comp!=finali){
      fs.unlink(__dirname+finali, function (err) {            
        if (err) {                                                 
            console.error(err);                                    
        }else{                                                        
       console.log('File has been Deleted'); 
        }                          
    });  
  }
  
     

  const datauser = await User.update({
 
    imgUrl
 
     },{
 
 where:{
 
   id:ID
  
   }
 
     })

     const datatrabalhos = await Trabalhadores.update({
 
      imgUrl
   
       },{
   
   where:{
   
     email: email
    
     }
   
       })

       const datapedidos = await Pedidos.update({
 
        imgUrl
     
         },{
     
     where:{
     
       email: email
      
       }
     
         })
  






    /**************************PROCURA USER PELO ID**************************/
  
    
  

        /**************************ENVIA OS DADOS**************************/
  
        res.render("pagina_usuario",{
          titulo: "pagina usuario",
          arrayuser: selectuser})
  
  }
  
  /***********************ENVIA E-MAILS******************************/

  

exports.envEmail = (req , res) => {


/*****************VARIAVEIS************************/

const msg = req.body.suptext;
const client = req.body.Email;
const userr = "kauan.mghenrique@gmail.com"
const pass = "kauanjw123"

/**********************CONFIGURAÇÂO PARA ENVIAR****************************/

const transport = nodemailer.createTransport({
host: "smtp.umbler.com",
port: "587",
service: 'Gmail',
auth: { userr, pass }
})


/*********************ENVIA DE FATO A MENSAGEM*****************************/

transport.sendMail({

  from: userr,
  to: userr,
  replyTo: client,
  subject: "Suport",
  text: "Usuario: "+client + "      mensagem: "+msg,
}).then(inf=>{
  console.log(inf)


/*************RENDERIZA O RESULTADO**************/

  res.render("suport",{
    titulo: "Suport",
    msg: "Obg por nos contatar, em breve analisaremos sua solicitação"
    })
})
.catch(erro=>{
  console.log(erro)
})
}


exports.usersalvapedido = async (req, res) => {

/******************VARIAVEIS************************/
console.log("CHEGO")

const email = req.body.Email;
const nome = req.body.Nome;
const cidade = req.body.Cidade;
const bairro = req.body.Bairro;
const categoria = req.body.select;
const contato = req.body.Contato;
const status = 1;

const imgn = req.file.filename;

const imgUrl = "/controllers/imgsusers/" + imgn

console.log("*******************url aqui: "+imgUrl)

const trblh = await Pedidos.findAll({
  where:{
    email: email
  }
});

const numbusc = trblh.length

/****************TRATA A REQUISIÇÂO TIPOPET(tipo do pet) RECEBIDO PELO USUARIO, CASO SEJA NULL ATRIBUI UM VALOR ABRANGENDO TODAS AS CATEGORIAS**********************/
console.log(categoria)


  if(numbusc<=limitpedidos){
    const criaoferta = await Pedidos.create({
      imgUrl: imgUrl,
      email: email,
      nome: nome,
      contato: contato,
      cidade: cidade,
      categoria: categoria,
      bairro: bairro,
      status: status,
      }).then(function(){
    
    
        res.status(200).render("criar_pedido",
          {
          titulo: "Criar Pedido",
          msg:"CRIADO",
          color:"#00ff2d"
      })
    
      
      })
    }else{
      res.status(200).render("criar_pedido",
      {
      titulo: "Criar Pedido",
      msg:"Numero Maximo de pedidos criados",
      color:"#ff0000"
    })
    }




/*********RENDERIZA O RESULTADO******************/

  

  
  }


/***********CRIA OFERTAS DE TRABALHO E SALVA NA TABELA TRABALHADORES**************/

exports.usersalvaoferta = async (req, res) => {


/******************VARIAVEIS************************/
const id = req.body.Id;
const email = req.body.Email;
const nome = req.body.Nome;
const valor = Number(req.body.Valor);
const cidade = req.body.Cidade;
const bairro = req.body.Bairro;
const categoria = req.body.Categoria;
const contato = req.body.Contato;
const status = 1;

const userdono = await User.findOne({
  where:{
    id: id
  }
});

const imguser = userdono.dataValues.imgUrl

const trblh = await Trabalhadores.findAll({
  where:{
    email: email
  }
});

const numbusc = trblh.length

/****************TRATA A REQUISIÇÂO TIPOPET(tipo do pet) RECEBIDO PELO USUARIO, CASO SEJA NULL ATRIBUI UM VALOR ABRANGENDO TODAS AS CATEGORIAS**********************/
console.log(categoria)

  if(numbusc<=limitoferta){
    createtableoferta(categoria)
    }else{
      res.status(200).send({msg:"Numero Maximo de trabalhos criados",color:"#ff0000"})
    }



async function createtableoferta(categoria){

const criaoferta = await Trabalhadores.create({
  imgUrl: imguser,
  email: email,
  nome: nome,
  valor: valor,
  contato: contato,
  cidade: cidade,
  categoria: categoria,
  bairro: bairro,
  status: status,
  })

  res.status(200).send({msg:"CRIADO",color:"#00ff2d"})

}
 


}
/**************************SALVA OS DADOS DO FORMULARIO NO BANCO DE DADOS**************************************/

exports.savebd = async (req, res) => { 

  const imgn = req.file.filename;

  const imgUrl = "/controllers/imgsusers/" + imgn

  console.log("DAOS IMG ")
  console.log(imgUrl)
/*****PEGA OS DADOS UNFORMADOS PELO USUARIO NO FORMULARIO******/

  const email = req.body.Email;

/*****FAZ UMA PESQUISA NO BANDO DE DADOS VERIFICANDO SE O EMAIL PARA CADASTRO QUE O USUARIO INFORMOU JA EXISTE******/

    const conta =  await User.findAll({
      where: {
        email: email,
      }
    });

/*****CASA O EMAIL QUE ESTA SENDO USADO PARA TENTATIVAS DE CADASTRO JA EXITA ELE RETORNA UM ERRO AO USUARIO DIZENDO QUE O EMAIL JA EXISTE******/

  if (conta.length>0){

   res.render("cadastro",{
      titulo: "cadastro",
      msg: "email ja existe"
    })

  }else{

/*****CASO O EMAIL INFORMADO NAO EXISTA, ELE REGISTRA OS DADOS NO BANCO DE DADOS******/

    const post = User.create({
        name: req.body.Nome,
        sobrenome: req.body.Sobrenome,
        email: req.body.Email,
        senha: req.body.Senha, 
        usuario: req.body.Usuario,
        cep: req.body.Cep,
        estado: req.body.Estado,
        cidade: req.body.Cidade,
        rua: req.body.Rua,
        bairro: req.body.Bairro,
        imgUrl: imgUrl
        })
        
/*****REENDERIZA A PAGINA NOVAMENTE APOS OS DADOS SEREM CADASTRADOS******/

return res.redirect('/login');

  }
}

/******************************FAZ UMA CONSULTA AO BANCO DE DADOS, MOSTRANDO TODOS OD REGISTROS USANDO O findAll()**********************************/

exports.exibebd = async (req, res) => { 

/*****BUSCA POR TODOS OS GEGISTROS NO BD******/

const usuarios = await Trabalhadores.findAll({
  where:{
    status: 1
  }
});

/*****RENDERIZA PAGINA, ENVIADO OS DADOS OBTIDOS NA CONSULTA AO BD******/
console.log(usuarios)
   res.render("cuidadores",{
   users: usuarios,
   resultados: usuarios.length,
   titulo: "Cuidadores",
   categoria: "Cuidador"
   })
}



exports.exibebdp = async (req, res) => { 

  /*****BUSCA POR TODOS OS GEGISTROS NO BD******/
  
  const usuarios = await Pedidos.findAll({
    where:{
      status: 1
    }
  });
  
  /*****RENDERIZA PAGINA, ENVIADO OS DADOS OBTIDOS NA CONSULTA AO BD******/
  console.log(usuarios)
     res.render("pedidos",{
     users: usuarios,
     resultados: usuarios.length,
     titulo: "Pedidos",
     categoria: "Pedido"
     })
  }


  exports.pedidosbusca = async (req, res) =>{
    let { Cidade, Bairro, Categoria } = req.body;
  
  

  
    
  
  
  const where = {};
  
  
  if(Cidade) where.cidade = Cidade;
  if(Bairro) where.bairro = Bairro;
  if(Categoria) where.categoria = Categoria;
  
  
  const resultadopesquisa = await Pedidos.findAll({
    where
  })
  
  
  
  var tudo = [];
  let final = [];
  
   console.log("************************************")
   tudo.push(where)
   console.log("*************LENGTH*****************")
   console.log(tudo.length)
   console.log("*************DATA COM FOR EACH*****************")
   tudo.forEach(data=>{
   console.log(data.cidade)
  
   final.push(data.cidade)
   final.push(data.bairro)
   final.push(data.categoria)
   console.log("****************RESULTADO FINAL********************")
   console.log(final)
   console.log("******************LENGTH DO PRODUTO FINAL******************")
   console.log(final.length)
   })
  
   var segfinal = [];
  var segsegfinal = [];
  
  

   
  
    async function objtrnsf(){
      if(final[0]==undefined && final[1]==undefined){
        console.log("ENTROU NA CONDIÇÂO")
  
        if(final[2]=="todas"){
  
          const allfind = await Pedidos.findAll();
          console.log(allfind)
          return allfind
        }else{
        const allfind = await Pedidos.findAll({
          where:{
            categoria:final[2]
          }})
          console.log(allfind)
          return allfind
        }
  
         }
    }

  
    objtrnsf().then(data=>{
      
  res.render("pedidos",{
    users: data,
    resultados: data.length,
    titulo: "Pedidosu",
    categoria: "Pedido"
  })
  
  })
  
  
  }



/***********************FILTRA DADOS PARA PESQUISA (cuidadores.ejs)******************************/

exports.filtrousers = async (req, res) =>{
  let { Cidade, Bairro, Valor, Categoria } = req.body;


 

  if(Valor==''){
  Valor=null
  }else
  if(Valor!=''){
  Valor=Number(Valor)
  }


const where = {};


if(Cidade) where.cidade = Cidade;
if(Bairro) where.bairro = Bairro;
if(Categoria) where.categoria = Categoria;


const resultadopesquisa = await Trabalhadores.findAll({
  where
})



var tudo = [];
var final = [];

 console.log("************************************")
 tudo.push(where)
 console.log("*************LENGTH*****************")
 console.log(tudo.length)
 console.log("*************DATA COM FOR EACH*****************")
 tudo.forEach(data=>{
 console.log(data.cidade)

 final.push(data.cidade)
 final.push(data.bairro)
 final.push(data.valor)
 final.push(data.categoria)
 console.log("****************RESULTADO FINAL********************")
 console.log(final)
 console.log("******************LENGTH DO PRODUTO FINAL******************")
 console.log(final.length)
 })

 var segfinal = [];
var segsegfinal = [];


  if(Valor!=null){

    const valorform = Number(Valor)

    resultadopesquisa.forEach(find=>{
      if(find.valor<=valorform){

        segfinal.push(find)
        console.log("************DADOS COMPARATIVOS MONEY***********")
        console.log(valorform)
        console.log(find.valor)
        console.log("*****************************************")
      }
    })
  }

 
 

  async function objtrnsf(){
    if(Valor==null && final[0]==undefined && final[1]==undefined){
      console.log("ENTROU NA CONDIÇÂO")

      if(final[2]=="todas"){
        const allfind = await Trabalhadores.findAll();
        return allfind
      }else{

      const allfind = await Trabalhadores.findAll({
        where:{
          categoria:final[3]
        }})
        return allfind
      }

       }
  }
  console.log("*********************************************()(*****************")
console.log("valor: "+Valor)
console.log("*********************************************()(*****************")

  objtrnsf().then(valor=>{
  console.log(valor)
res.render("cuidadores",{
  users: valor,
  resultados: valor.length,
  titulo: "Cuidadores",
  categoria: "Cuidador"
})
})


}


/***********************FILTRA DADOS PARA PESQUISA (cuidadores.ejs)******************************/

exports.filtrousersped = async (req, res) =>{
  let { Cidade, Bairro, Valor, Categoria } = req.body;



  if(Valor==''){
  Valor=null
  }else
  if(Valor!=''){
  Valor=Number(Valor)
  }


const where = {};


if(Cidade) where.cidade = Cidade;
if(Bairro) where.bairro = Bairro;
if(Categoria) where.categoria = Categoria;


const resultadopesquisa = await Trabalhadores.findAll({
  where
})



var tudo = [];
var final = [];

 console.log("************************************")
 tudo.push(where)
 console.log("*************LENGTH*****************")
 console.log(tudo.length)
 console.log("*************DATA COM FOR EACH*****************")
 tudo.forEach(data=>{
 console.log(data.cidade)

 final.push(data.cidade)
 final.push(data.bairro)
 final.push(data.valor)
 final.push(data.categoria)
 console.log("****************RESULTADO FINAL********************")
 console.log(final)
 console.log("******************LENGTH DO PRODUTO FINAL******************")
 console.log(final.length)
 })

 var segfinal = [];
var segsegfinal = [];


  if(Valor!=null){

    const valorform = Number(Valor)

    resultadopesquisa.forEach(find=>{
      if(find.valor<=valorform){

        segfinal.push(find)
        console.log("************DADOS COMPARATIVOS MONEY***********")
        console.log(valorform)
        console.log(find.valor)
        console.log("*****************************************")
      }
    })
  }

 

  async function objtrnsf(){
    if(Valor==null && final[0]==undefined && final[1]==undefined){
      console.log("ENTROU NA CONDIÇÂO")

      if(final[3]=="todas"){
        const allfind = await Trabalhadores.findAll();
        return allfind
      }else{

      const allfind = await Trabalhadores.findAll({
        where:{
          categoria:final[4]
        }})
        return allfind
      }

       }
  }
  console.log("*********************************************()(*****************")
console.log("valor: "+Valor)
console.log("*********************************************()(*****************")

  objtrnsf().then(valor=>{
  console.log(valor)
res.render("cuidadores",{
  users: valor,
  resultados: valor.length,
  titulo: "Cuidadores",
  categoria: "Cuidador"
})
})


}

/***********************PEGA OS BAIRROS DAS CIDADES JA CADASTRADAS******************************/

exports.cidadedados = async (req , res) => {
const cidade = req.body.cidade;
console.log(cidade)
const data = await Trabalhadores.findAll({
where:{
  cidade: cidade
}

})
var tot = []
for(let cont = 0;cont<data.length;++cont){
tot.push(data[cont].bairro)
}

const resultfinal =  JSON.stringify(tot)
res.send(resultfinal)
}
/****************************PEGA OS DADOS DO FORMULARIO, FAZ O CONSUMO DE UMA API, TRNASFORMANDO O CEP QUE O USUARIO INFORMOU EM SUA RESPECTIVA CIDADE************************************/


/******************************FAZ LOGIN NO SISTEMA COM O EMAIL E SENHA INFORMADO PELO USUARIO CASA AMBOS SEJAM VALIDOS**********************************/

exports.userlogin = async (req, res, next) => {

 /*****EMAIL E SENHA INFORMADOS NO FORMULARIO******/
  const camad = req.body.cmd
  const email = req.body.email;
  const senha = req.body.senha;
  
  console.log(email+"      "+senha)

  /*****FAZ UMA BUSCA NO BANCO DE DADOS COM O EMAIL INFORMADO******/

    const userfinal = await User.findAll({
      where:{
        email: email
      }
    });

  /*****VERIFICA SE FOI ENCONTRADO ALGUM RESULTADO******/

if(userfinal.length>0){

  /*****PASSA PELOS REGISTROS******/

  for(let contado = 0;contado<userfinal.length;++contado){

  /******VERIFICA SE A SENHA DO RESULTADO BATE COM A SENHA INFORMADO PELO USUARIO*****/
   if(userfinal[contado].senha===senha){

    let dados = [userfinal[contado].email,userfinal[contado].senha]

  /*****CASO EMAIL E SENHA SEJAM COMPATIVEIS ELE PASSARA PARA A PAGINA DO USUARIO******/
   
  console.log(userfinal[contado])

    console.log("************************AQUI****************************")
    
    if(camad==="infuser"){
    res.status(200).send(userfinal[contado])
    }else{
    res.status(200).send({status: true ,email: userfinal[contado].email,senha: userfinal[contado].senha})
    }

      }else{

          /*****RETORNARA UM ERRO CASO A SENHA INFORMADO PELO USUARIO SEJA INVALIDO******/

          res.status(200).send({
           text2: "Senha Incorreta",
          })
        
      }
    }
}else{

    /*****RETORNARA UM ERRO CASO O EMAIL INFORMADO PELO USUARIO SEJA INVALIDO******/

    res.status(200).send({
     text1: "E-mail Incorreto",
    })
  }
  

}
  
/****************************************************************/

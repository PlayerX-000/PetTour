   const express = require('express');

   const app = express();

   const port = process.env.PORT || 3930;

   const path = require('path');

   const router = require('./routes/routes');

   const sequelize = require('./config/connections');

   const bodyParser = require('body-parser');

   const multer = require('multer');

   const { dirname } = require('path');


/****************************************************************/

const storage = multer.diskStorage({

destination: (req , file , cb) => {

cb(null, './controllers/imgsusers/');

},

filename: (req , file , cb) => { 

cb(null, 'IMG_'+file.originalname);

}
})

/****************************************************************/


app.use(multer({storage: storage}).single('image'))

app.use('/controllers/imgsusers/',express.static(path.join(__dirname,'/controllers/imgsusers/')))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'./public')));

app.use(router);

app.use((req, res) => {
  res.status(404).render('ERROR',{titulo: req.ip})
})
/****************************************************************/

app.set('view engine','ejs');

app.set('views','views');

/****************************************************************/

  sequelize.sync().then((req , res)=> {
    console.log("\n"+"*******************************************");
    console.log("Banco de Dados Iniciado");
    console.log("\n"+"*******************************************");
  }).catch(error=>{
    console.log("\n"+"**************************************************************************************");
    console.log("Erro Ao Iniciar Banco de Dados");
    console.log(error);
    console.log("\n"+"**************************************************************************************");
  })

/*<---------------------------------------------------------------->*/

  app.listen(port,()=>{
    console.log("\n"+"*******************************************");
    console.log("Servidor Iniciado");
    console.log("\n"+"*******************************************");
    console.log("Servidor Rodando na Porta: "+port+"  ---> http://localhost:"+port);
    console.log("\n"+"*******************************************");
  })

/****************************************************************/

  module.exports = app;
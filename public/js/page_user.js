

$(window).on("load", function(){

    $("#popup").mouseleave(function() {
        
        document.getElementById('popup').style.display = 'none';
    })

    $("#popup2").mouseleave(function() {
     
        document.getElementById('popup2').style.display = 'none';
    })

    $("#elementmain").click(function() {
     
      
    })
    
    $("#trasfo").click(function() {
     
        document.getElementById('popup').style.display = 'none';
        document.getElementById('popup2').style.display = 'none';
    })
   
})

$("#btnpopup").click(()=>{
    fechapopup()
})
function deletardado(){
    localStorage.removeItem("credentials");
    const dados =  localStorage.getItem("credentials");
    console.log(dados)
}

$('#btnoferta').on('click', function(){
    const email = document.getElementById('inputinfouseremail').value
   
   $.ajax({
   url: "/trabalhos",
   method: "POST",
   data:({
   email: email
   }),
   success: function(data){
       const datauser = JSON.parse(data)
       recebevalue(datauser.link,datauser.resultadopesq)
       }
   
   })
   var apendnodeinf = [], num = [];
   function recebevalue(caminho,objdata){
   
   const obj = objdata;
   const objimg = caminho;

   console.log(objimg)
 

   console.log("data")
   console.log(obj)

   const pedidoaberto = obj.length;
   
   document.getElementById("limite").innerHTML = pedidoaberto+"/1"
     
   
   
       
   obj.forEach(obj => {
       num.push(obj)
   var divins = `
   <div id="paicont2">
   <div class="container">
           <div class="row">
   <div class="span4 well">
           <div class="row">
           <div class="span1"><a href="http://critterapp.pagodabox.com/others/admin" class="thumbnail"><img src="`+objimg+`" alt=""></a></div>
           <div class="span3">
           <div class="conj_text">
             <p>cuidador</p>
                   
           </div>
           <span id="identfic" class="badge badge-pill">Cidade: `+obj.cidade+`</span>
                       <span id="identfic" class="badge badge-pill">Bairro: `+obj.bairro+`</span>
                       <span id="identfic" class="badge badge-pill">Pet: `+obj.categoria+`</span>
                       <span id="identfic" class="badge badge-pill">Telefone: `+obj.contato+`</span>
                       <span id="identfic" class="badge badge-pill">Valor minimo a ser cobrado: `+obj.valor +` Reais</span>
                       <span id="identfic" class="badge badge-pill">Disponivel por : `+obj.tempo +` Dias</span>
                       <span id="identfic" class="badge badge-pill">Nome: `+obj.nome +`</span>
             <button type="texton" value="`+obj.email+`" onclick="mostid(this.value)" class="btn btn-primary btn-sm">Ver Perfil</button>
           </div>
         </div>
       </div>
   </div>
         </div>
         </div>
   `
    apendnodeinf.push({divins})
   })
   
   $('#usuarios').children().remove().end()
   
   apendnodeinf.forEach(retorno=>{
       
       var conte = document.createElement ("div")
   conte.innerHTML = (retorno.divins)
       console.log(conte);
       document.getElementById("usuarios").appendChild(conte);
   
   })
   }
   })
   


   $('#btnhistorico').on('click', function(){
    const email = document.getElementById('inputinfouseremail').value
   
   $.ajax({
   url: "/historico",
   method: "POST",
   data:({
   email: email
   }),
   success: function(data){
       const datauser = JSON.parse(data)
       recebevalue(datauser.link,datauser.resultadopesq)
       }
   
   })
   var apendnodeinf = [], num = [];
   function recebevalue(caminho,objdata){
   
   const obj = objdata;
   const objimg = caminho;

   console.log(objimg)
 

   console.log("data")
   console.log(obj)

   const pedidoaberto = obj.length;
   
   document.getElementById("limite").innerHTML = pedidoaberto+"/1"
     
   
   
       
   obj.forEach(obj => {
       num.push(obj)
   var divins = `
   <div id="paicont2">
   <div class="container">
           <div class="row">
   <div class="span4 well">
           <div class="row">
           <div class="span1"><a href="http://critterapp.pagodabox.com/others/admin" class="thumbnail"><img src="`+objimg+`" alt=""></a></div>
           <div class="span3">
           <div class="conj_text">
             <p>cuidador</p>
                   
           </div>
           <span id="identfic" class="badge badge-pill">Cidade: `+obj.cidade+`</span>
                       <span id="identfic" class="badge badge-pill">Bairro: `+obj.bairro+`</span>
                       <span id="identfic" class="badge badge-pill">Pet: `+obj.categoria+`</span>
                       <span id="identfic" class="badge badge-pill">Telefone: `+obj.contato+`</span>
                       <span id="identfic" class="badge badge-pill">Valor minimo a ser cobrado: `+obj.valor +` Reais</span>
                       <span id="identfic" class="badge badge-pill">Disponivel por : `+obj.tempo +` Dias</span>
                       <span id="identfic" class="badge badge-pill">Nome: `+obj.nome +`</span>
             <button type="texton" value="`+obj.email+`" onclick="mostid(this.value)" class="btn btn-primary btn-sm">Ver Perfil</button>
           </div>
         </div>
       </div>
   </div>
         </div>
         </div>
   `
    apendnodeinf.push({divins})
   })
   
   $('#usuarios').children().remove().end()
   
   apendnodeinf.forEach(retorno=>{
       
       var conte = document.createElement ("div")
   conte.innerHTML = (retorno.divins)
       console.log(conte);
       document.getElementById("usuarios").appendChild(conte);
   
   })
   }
   })



   $('#btnpedido').on('click', function(){
    const email = document.getElementById('inputinfouseremail').value;
   
   $.ajax({
   url: "/pedidos",
   method: "POST",
   data:({
   Email: email
   }),
   success: function(data){
       const datauser = JSON.parse(data)
       recebevalue(datauser)
       }
   
   })
   var apendnodeinf = [], num = [];
   function recebevalue(objdata){
   
   const obj = objdata;
   const pedidoaberto = obj.length;

   console.log("data")
   console.log(obj)
   
   document.getElementById("limite").innerHTML = pedidoaberto+"/1";
   

       
   obj.forEach(obj => {
       num.push(obj)
   var divins = `
   <div id="paicont2">
   <div class="container">
           <div class="row">
   <div class="span4 well">
           <div class="row">
           <div class="span1"><a href="http://critterapp.pagodabox.com/others/admin" class="thumbnail"><img src="`+obj.imgUrl+`" alt=""></a></div>
           <div class="span3">
           <div class="conj_text">
             <p>Pedido</p>
                   
           </div>
           
           <span id="identfic" class="badge badge-pill">Nome: `+obj.nome+`</span>
                       <span id="identfic" class="badge badge-pill">Contato: `+obj.contato+`</span>
                       <span id="identfic" class="badge badge-pill">Cidade: `+obj.cidade+`</span>
                       <span id="identfic" class="badge badge-pill">Bairro: `+obj.bairro+`</span>
                       <span id="identfic" class="badge badge-pill">Categoria: `+obj.categoria +`</span>
                       <span id="identfic" class="badge badge-pill">Tempo estimado : `+obj.tempo +` Dias</span>
             <button type="texton" value="`+obj.email+`" onclick="mostid(this.value)" class="btn btn-primary btn-sm">Ver Perfil</button>
           </div>
         </div>
       </div>
   </div>
         </div>
         </div>
   `
    apendnodeinf.push({divins})
   })
   
   $('#usuarios').children().remove().end()
   
   apendnodeinf.forEach(retorno=>{
       var conte = document.createElement ("nav")
   conte.innerHTML = (retorno.divins)
       console.log(conte);
       document.getElementById("usuarios").appendChild(conte);
   
   })
   }
   })



 function fechapopup(){
    let a = document.getElementById('popup2').style.display
    if (a == ''){document.getElementById('popup2').style.display='table'}else
    if(a == 'table'){
        document.getElementById('popup2').style.display='none'
    }else{
        document.getElementById('popup2').style.display='table'
    }

    console.log(a)
}

   function salvadados(pag){

let interruptorpopup = document.getElementById('popup2').style.display;

var dados = [];

var nome = document.getElementById("inputinfousernome").value,
email = document.getElementById("inputinfouseremail").value,
bairro = document.getElementById("inputinfouserbairro").value,
cidade = document.getElementById("inputinfousercidade").value,
iduser = document.getElementById("inputinfouserid").value

dados.push(nome,email,bairro,cidade,iduser)
console.log(dados)
sessionStorage.setItem('chavedsaoddcndi', JSON.stringify(dados) );

if(pag=="criarpedido"){
    window.location="/criar_pedido";
}else
if(pag=="criaroferta"){
    window.location="/criar_oferta";
}else{
    alert("numero max atingido")}

   }


   function mostid(email){

    let interruptorpopup = document.getElementById('popup').style.display;
    const idinf = email;

    let nome = document.getElementById('nomepop');
    let cidade = document.getElementById('cidadepop');
    let bairro = document.getElementById('bairropop');
    let rua = document.getElementById('ruapop');
    let cep = document.getElementById('ceppop');
    let emailuser = document.getElementById('emailpop');
    
    $.ajax({
        url: "/dadosusers",
        method: "POST",
        data:({
        email: idinf
        }),
        success: function(data){
     
            const datauser = JSON.parse(data)
     
            console.log(datauser[0])
      

        
        if(interruptorpopup=="block"){
        interruptorpopup="none";
        document.getElementById('popup').style.display = interruptorpopup;
        }else{
        interruptorpopup="block"
        document.getElementById('popup').style.display = interruptorpopup;
        }

        nome.innerText="nome: "+datauser[0].name;
        cidade.innerText="cidade: "+datauser[0].cidade;
        bairro.innerText="bairro: "+datauser[0].bairro;
        cep.innerText="cep: "+datauser[0].cep;
        rua.innerText="rua: "+datauser[0].rua;
        emailuser.innerText="email: "+datauser[0].email;
    }
    /*adicionar options no select cidade, com os dados trazidos do servidor*/
    })
}




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



$("#popup").mouseleave(function() {
    document.getElementById('popup').style.display = 'none';
})

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});





document.getElementById("selecionarcidade").addEventListener("blur",function(){
  const cidade = document.getElementById("selecionarcidade").value


     
  $.ajax({
   url: "/cidadedados",
   method: "POST",
   data:({
   cidade: cidade
   }),
   success: function(data){

       const datauser = JSON.parse(data)

        $('#selecionabairro').children().remove().end()
    
       recebevalue(datauser)
       }
   /*adicionar options no select cidade, com os dados trazidos do servidor*/
   })


})
   

   var apendnodeinf = [], num = [];

   function recebevalue(objdata){
  const obj = objdata
  apendnodeinf = [];
  
  let nomesUnicos = [];
$.each(obj, function(i, el){
    if($.inArray(el, nomesUnicos) === -1) nomesUnicos.push(el);

});



       
nomesUnicos.forEach(obj => {

       num.push(obj)
   var divins = `
   <option id="butaoopselec">`+obj+`</option>
   `;
    apendnodeinf.push({divins})
   })

   
   apendnodeinf.forEach(retorno=>{
       var conte = document.createElement ("option")
           conte.innerHTML = (retorno.divins)
       console.log(conte);
       $('#selecionabairro').append(conte);
       
       
   })

  
  }
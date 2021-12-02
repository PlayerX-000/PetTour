
var conteudo = document.getElementById("Email").value
if (conteudo == ""){
  document.getElementById("campo_suport").disabled = true;
  document.getElementById("btnenv").disabled = true;
}
   
   document.getElementById("Email").addEventListener("blur",function(){
    apiemail()
    
  })

  document.getElementById("campo_suport").addEventListener("blur",function(){
 var valortxt = document.getElementById("campo_suport").value
 if(valortxt!=""){
  document.getElementById("btnenv").disabled = false;
 }
  })

async function apiemail(){

    var mail = document.getElementById("Email").value;

    await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=5646490abae64c3bb415d482137ed0f6&email=${mail}`)
  .then(Response => Response.json())
  .then(data => {
    console.log(data)
if(data.is_smtp_valid.value==false){
  document.getElementById("validateemail").innerText="Email Invalido"
  document.getElementById("validateemail").style=`color: red`
  document.getElementById("validateemail").value = "";
}else if(data.is_smtp_valid.value==true){
  document.getElementById("campo_suport").disabled = false;
  document.getElementById("validateemail").innerText="Email Valido"
  document.getElementById("validateemail").style=`color: lime`
}

  })
      .catch(error => {
          console.log(error);
      });
  
}


const options = {
    method: "GET",
    mode: "cors",
    caches: "default"
}



document.getElementById("validationServer05").addEventListener("blur",function(){
  const cep = document.getElementById("validationServer05");
   let search = cep.value

    fetch(`https://viacep.com.br/ws/${search}/json/`, options).then((response) => {
        response.json().then(data => {
          console.log(data)
          document.getElementById("bairroi").value = data.bairro;
          document.getElementById("cidadei").value = data.localidade;
          document.getElementById("ruai").value = data.logradouro;
          document.getElementById("estadoi").value = data.uf;

        })
    })
})

document.getElementById("inputEmail").addEventListener("blur",function(){
  apiemail()
})
async function apiemail(){

  var mail = document.getElementById("inputEmail").value;
  await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=5646490abae64c3bb415d482137ed0f6&email=${mail}`)
.then(Response => Response.json())
.then(data => {
if(data.is_smtp_valid.value==false){
document.getElementById("avisoemail").innerText="Email Invalido"
document.getElementById("avisoemail").style=`color: red`
document.getElementById("inputEmail").value = "";
}else if(data.is_smtp_valid.value==true){
document.getElementById("avisoemail").innerText="Email Valido"
document.getElementById("avisoemail").style=`color: lime`
}

})
    .catch(error => {
        console.log(error);
    });

}

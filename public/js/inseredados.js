
pegadados()
function pegadados(){

   const dados = localStorage.getItem('credentials');

   let cach = JSON.parse(dados);
if(cach){
   reqinf(cach[0],cach[1],"infuser");
}else{
    window.location = "/login"
}
}

function reqinf(email,senha,necess){


$.ajax({
    url: "/login",
    method: "POST",
    data:({
    email: email,
    senha: senha,
    cmd: necess
    }),

    success: function(statres){

        const resposta  = statres;
        
                console.log(resposta)

                if(resposta){
document.getElementById("idformimg").value = resposta.id
document.getElementById("emailformimg").value = resposta.email
document.getElementById("inputinfouserid").value = resposta.id
document.getElementById("inputinfouserrua").value = resposta.rua
document.getElementById("inputinfousercidade").value = resposta.cidade
document.getElementById("inputinfouserestado").value = resposta.estado
document.getElementById("inputinfousercep").value = resposta.cep
document.getElementById("inputinfouserusuario").value = resposta.usuario
document.getElementById("inputinfousersenha").value = resposta.senha
document.getElementById("inputinfouseremail").value = resposta.email
document.getElementById("inputinfousersobrenome").value = resposta.sobrenome
document.getElementById("inputinfousernome").value = resposta.name
document.getElementById("inputinfouserbairro").value = resposta.bairro
document.getElementById("imgperfil").src = resposta.imgUrl
                }else{

                    window.location.href="http://localhost:8080/ERROR";

}
}
})
}




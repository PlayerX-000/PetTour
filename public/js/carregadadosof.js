
$(window).on("load", function(){
  insertdados()
})


$('#criasoli').on("click",function(){
  processenv()
});




function insertdados(){

const dadosArquivados = JSON.parse(sessionStorage.getItem('chavedsaoddcndi'));

document.getElementById("nome").value = dadosArquivados[0];
document.getElementById("email").value = dadosArquivados[1];
document.getElementById("bairro").value = dadosArquivados[2];
document.getElementById("cidade").value = dadosArquivados[3];
document.getElementById("iduser").value = dadosArquivados[4];

}







function processenv(){

 
const id = document.getElementById("iduser").value;
const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const bairro = document.getElementById("bairro").value;
const cidade = document.getElementById("cidade").value;
const contato = document.getElementById("contato").value;
const valor = document.getElementById("valor").value;
const select = document.getElementById("select");
const categoria = select.options[select.selectedIndex].text;


console.log(contato)
console.log(valor)
console.log(categoria)
if(contato!='' && valor!=''){
$.ajax({
  url: "/criar_oferta",
  method: "POST",
  data:({
    Id: id,
    Email: email,
    Nome: nome,
    Valor: valor,
    Cidade: cidade,
    Bairro: bairro,
    Categoria: categoria,
    Contato: contato
  }),
  success: function(statres){

      const resposta  = statres;
      
      console.log(resposta);
      document.getElementById("msgdvlt").innerHTML=resposta.msg;
      document.getElementById("msgdvlt").style.color=resposta.color;

const contato = document.getElementById("contato").value = '';
const valor = document.getElementById("valor").value = '';

}
})
}
}


const form = document.getElementById('formcriasoli')
form.addEventListener('submit', e => {
  e.preventDefault()
})


function salvalocal(email,senha){

  let dados = [email, senha];

  const salvar = JSON.stringify(dados)

  localStorage.setItem("credentials", salvar);

}
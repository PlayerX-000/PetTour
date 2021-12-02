
$(window).on("load", function(){
    insertdados()
  })
  
  
 
  
  
  
  function insertdados(){
  
  const dadosArquivados = JSON.parse(sessionStorage.getItem('chavedsaoddcndi'));
  
  document.getElementById("nome").value = dadosArquivados[0];
  document.getElementById("email").value = dadosArquivados[1];
  document.getElementById("bairro").value = dadosArquivados[2];
  document.getElementById("cidade").value = dadosArquivados[3];
  document.getElementById("iduser").value = dadosArquivados[4];
  
  }
  
  
  
  
  
  
  
  function processenv(){
  
  
const id = document.getElementById("iduser").value
const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const bairro = document.getElementById("bairro").value;
const cidade = document.getElementById("cidade").value;
const contato = document.getElementById("contato").value;

const categoria = document.getElementsByName("select").value;

$.ajax({
  url: "/criar_pedido",
  method: "POST",
  data:({
    Id: id,
    Email: email,
    Nome: nome,
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
}
})
  }
  
  
  
  const form = document.getElementById('formcriasoli')
  form.addEventListener('submit', e => {
    e.preventDefault()
  })
  
  /*
  function salvalocal(email,senha){
  
    let dados = [email, senha];
  
    const salvar = JSON.stringify(dados)
  
    localStorage.setItem("credentials", salvar);
  
  }
  */
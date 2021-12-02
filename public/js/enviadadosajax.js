$(window).on("load",function(){
    repoeinf()
});

$('#btnenv').on("click",function(){
    processenv()
});



function processenv(){

const email = document.getElementById("emailinput").value;
const senha = document.getElementById("senhainput").value;
const smalle = document.getElementById("passwordHelpInlineemail");
const smalls = document.getElementById("passwordHelpInlinesenha");


$.ajax({
    url: "/login",
    method: "POST",
    data:({
    email: email,
    senha: senha
    }),

    success: function(statres){

        const resposta  = statres;
        
        console.log(resposta);

        if(resposta.text1){
            smalls.innerText = "";
            smalle.innerText = resposta.text1;
        }else 
        if(resposta.text2){
            smalle.innerText = "";
            smalls.innerText = resposta.text2;
        }else{
            smalls.innerText = "";
            smalle.innerText = "";

            if(resposta.status===true){

                const email = resposta.email;
                const senha = resposta.senha;

              
                let dados = localStorage.getItem('credentials');
    
                const cach = JSON.parse(dados)
                
                if(cach){

                    window.location="/pagina_usuario";

                }else{

                    salvalocal(email,senha)

}
}
}
}
})
}



const form = document.getElementById('formdd')
form.addEventListener('submit', e => {
    e.preventDefault()
})


function salvalocal(email,senha){

    let dados = [email, senha];

    const salvar = JSON.stringify(dados)

    localStorage.setItem("credentials", salvar);

}

function repoeinf(){

    let dados = localStorage.getItem('credentials');

    const cach = JSON.parse(dados)

    console.log(cach);

    if(cach){

        document.getElementById("emailinput").value = cach[0];
        document.getElementById("senhainput").value = cach[1];

    }

}



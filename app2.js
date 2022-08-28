//selecionando o botão pela id
var btnEnviar = document.querySelector("#btnEnviar");
//acionando função do evento ao clicar no botão "Enviar"
btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    // buscando (mapeando) o formulário inteiro 
    var formFilme = document.querySelector("#formFilme");
    //pedindo para imprimir cada campo do formulário
    /*console.log(formFilme.titulo.value);
    console.log(formFilme.ano.value);
    console.log(formFilme.genero.value);
    console.log(formFilme.descricao.value);
    console.log(formFilme.link.value);*/

    
   
})

 //imprimindo o valor digitado no HTML
    function capturar () {
    capturando = document.getElementById("titulo").value;
    document.getElementById("tituloDigitado").innerHTML = capturando;
    }

    capturar(titulo)
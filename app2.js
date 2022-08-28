//selecionando o botão pela id
var btnSalvar = document.querySelector("#btnSalvar");
    debugger;
//acionando função do evento ao clicar no botão "Enviar"
btnSalvar.addEventListener("click", function(event){
    event.preventDefault();
    // buscando (mapeando) o formulário inteiro 
    var formFilme = document.querySelector("#formFilme");
    //pedindo para imprimir cada campo do formulário
    console.log(formFilme.titulo.value);
    console.log(formFilme.ano.value);
    console.log(formFilme.genero.value);
    console.log(formFilme.descricao.value);
    console.log(formFilme.link.value);

    // criando elemento
    var valorDigitado = document.createElement("fieldset")

    //creando elementos de linha
    var campoTitulo = document.createElement("label");
    var campoAno = document.createElement("lo");
    var campoGenero = document.createElement("lo");
    var campoDescricao = document.createElement("lo");
    var campoLink = document.createElement("lo");

    //referencia da tabela de inputs
    var tabelaAlunos = document.querySelector("#formFilme").querySelector("fieldset");


    campoTitulo.textContent = formFilme.titulo.value;
    campoAno.textContent = formFilme.ano.value;
    campoGenero.textContent = formFilme.genero.value;
    campoDescricao.textContext = ormFilme.descricao.value;
    campoLink.textContent = formFilme.link.value;


    //colocando o valor digitado dentro do forms
    valorDigitado.appendChild(campoTitulo);
    valorDigitado.appendChild(campoAno);
    valorDigitado.appendChild(campoGenero);
    valorDigitado.appendChild(campoDescricao);
    valorDigitado.appendChild(campoLink);
    
    formFilme.appendChild(valoresDigitados);

})
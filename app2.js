
//selecionando o botão pela id
var btnAdd = document.querySelector("#btnAdd");
var tituloFilme = document.getElementById("titulo")
var anoFilme = document.getElementById("ano")
var descricaoFilme = document.getElementById("descricao")
var linkImagem = document.getElementById("img")

//acionando função do evento ao clicar no botão "Enviar"
btnAdd.addEventListener("click", event => {
    event.preventDefault();
    // buscando (mapeando) o formulário inteiro 
    /*var formFilme = document.querySelector("#formFilme");*/
    //pedindo para imprimir cada campo do formulário
    /*console.log(formFilme.titulo.value);
    console.log(formFilme.ano.value);
    console.log(formFilme.genero.value);
    console.log(formFilme.descricao.value);
    console.log(formFilme.link.value);*/

     //criando cards com o valor digitado no HTML
     function cards(){
        let criacardTitulo = document.getElementById("titulo").value;
        document.querySelector("#tituloDigitado").innerHTML = criacardTitulo
        let criacardAno = document.getElementById("ano").value;
        document.querySelector("#anoDigitado").innerHTML = criacardAno
        let criarcardGenero = document.getElementById("genero").value;
        document.querySelector("#generoDigitado").innerHTML = criarcardGenero
        let criacardDescricao = document.getElementById("descricao").value;
        document.querySelector("#descricaoDigitado").innerHTML = criacardDescricao
        let criarcardImg = document.getElementById("img").value;
        document.querySelector("#imgDigitado").innerHTML = `
            <img src= ${linkImagem.value} >
            `
     }
     cards()

})



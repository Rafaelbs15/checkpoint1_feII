const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const titulo = document.querySelector("#titulo");

    const value = titulo.value;

    console.log(value);
});

// recebe o valor e imprime no HTML
function recebeAno(){
    var titutloFilme = document.getElementById("#titulo").value;
    console.log(titutloFilme);
    document.getElementById("recebeTitulo").innerHTML = tituloFilme;
    
}

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const ano = document.querySelector("#ano");

    const value = ano.value;

    console.log(value);
});

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const genero = document.querySelector("#genero");

    const value = genero.value;

    console.log(value);
});

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const descricao = document.querySelector("#descricao");

    const value = descricao.value;

    console.log(value);
});

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const link = document.querySelector("#link");

    const value = link.value;

    console.log(value);
});

function recebeAno(){
    var titutloFilme = document.getElementById("#titulo").value;
    console.log(titutloFilme);
    document.getElementById("recebeTitulo").value = tituloFilme;
    
}


let prato;
let bebida;
let adicional;



function escolherGourmet() {
    document.getElementById("gourmet").style.borderColor = "green";
    document.getElementById("bacon").style.borderColor = "white";
    document.getElementById("salad").style.borderColor = "white";
    prato = "Burguer gourmet";
}

function escolherBacon() {
    document.getElementById("bacon").style.borderColor = "green";
    document.getElementById("salad").style.borderColor = "white";
    document.getElementById("gourmet").style.borderColor = "white";
    prato = "Burguer bacon";
}

function escolherSalad() {
    document.getElementById("salad").style.borderColor = "green";
    document.getElementById("gourmet").style.borderColor = "white";
    document.getElementById("bacon").style.borderColor = "white";
    prato = "Burguer salad";
}

function escolherCoca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("suco").style.borderColor = "white";
    bebida = "Coca cola";
}


function escolherSuco() {
    document.getElementById("suco").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    bebida = "Suco";
}

function escolherBatataQueijo() {
    document.getElementById("batataQueijo").style.borderColor = "green";
    document.getElementById("batataNormal").style.borderColor = "white";
    adicional = "Batata frita com queijo";
}

function escolherBatataNormal() {
    document.getElementById("batataNormal").style.borderColor = "green";
    document.getElementById("batataQueijo").style.borderColor = "white";
    adicional = "Batata normal";
}


function finalizarPedido() {
   let menssagem;
   menssagem="Olá, meu pedido é: " +prato+ ", " +bebida+ ", " +adicional;
   window.open("https://wa.me/+5598900000000?text=" +menssagem);
}



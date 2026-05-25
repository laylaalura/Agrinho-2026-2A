// CONTADOR ANIMADO

let contador = document.getElementById("contador");

let numero = 0;

function animarContador(){

  let intervalo = setInterval(() => {

    numero += 50;

    contador.textContent = numero;

    if(numero >= 5000){

      clearInterval(intervalo);

    }

  }, 40);

}

window.addEventListener("load", animarContador);


// FORMULÁRIO

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento){

  evento.preventDefault();

  let nome = document.getElementById("nome").value;

  alert("Obrigado pela participação, " + nome + "!");

  formulario.reset();

});


// ACESSIBILIDADE

const contrasteBtn = document.getElementById("contrasteBtn");

contrasteBtn.addEventListener("click", () => {

  document.body.classList.toggle("alto-contraste");

});


// DEPURAÇÃO

console.log("Site carregado com sucesso!");

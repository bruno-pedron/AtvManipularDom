// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Selecionando as frases
const Frase = document.getElementsByClassName("mensagem2");

// Selecionando o botão que altera as frases
const changeFraseBtn = document.getElementById("btn-mudar-frases");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changeFraseBtn.addEventListener("click", function () {
  for (let i = 0; i < Frase.length; i++) {
    Frase[i].textContent = `Frase ${i + 1} modificada`;
  }
});


const formulario = document.getElementById("meuFormulario");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(e) {
  e.preventDefault(); // Evita o envio do formulário padrão

  const valorA = parseFloat(campoA.value);
  const valorB = parseFloat(campoB.value);

  if (valorB > valorA) {
    mensagem.textContent = "Formulário válido! B é maior que A.";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "Formulário inválido! B deve ser maior que A.";
    mensagem.style.color = "red";
  }
});

